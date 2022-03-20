import { Layout, TableRates } from "components";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import { getShipment, createLabel } from "services";
import { useState } from 'react';

const ShipmentPage = ({ rates }: { rates: any }) => {
    const router = useRouter();
    const [error, setError] = useState('')

    const onClickRate = (id: string) => {
        setError('')
        createLabel(id)
            .then(resp => {
                if(resp.data.data.attributes.status === "ERROR"){
                    setError(resp.data.data.attributes.error_message[0].message)
                    return;
                }
                router.push(`/label/${resp.data.data.id}`)
            })
            .catch((err) => {
                setError(err.message);
                console.log(err);
            });
    };

    console.log(rates);
    return (
        <Layout>
            <div className='bg-white max-w-5xl rounded-lg md:mx-auto mt-5 pt-5 shadow-lg mx-3'>
                <h2 className='text-2xl px-4'>Servicios disponibles</h2>
                {error && <div className='mt-5'>
                        <h2 className='text-3xl text-center text-red-500'>
                           {error}
                        </h2>
                    </div>}
                {rates.length === 0 ? (
                    <div className='mt-5'>
                        <h2 className='text-3xl text-center'>
                            No hay servicios para esta cotizacion
                        </h2>
                    </div>
                ) : (
                    <TableRates rates={rates} onClickRate={onClickRate} />
                )}
            </div>
        </Layout>
    );
};

export default ShipmentPage;

export const getServerSideProps: GetServerSideProps = async ({
    query,
}: {
    query: any;
}) => {
    const resp = await getShipment(query.id);

    let rates: any = resp.data.included.filter(
        (item: any) => item.type === "rates"
    );

    rates = rates.map(
        ({ id, attributes }: { id: string; attributes: any }) => ({
            ...attributes,
            id,
            average: attributes.days * Number(attributes.total_pricing),
        })
    );

    rates.sort((a: any, b: any) => (a.average > b.average ? 1 : -1));

    return {
        props: {
            rates,
        },
    };
};
