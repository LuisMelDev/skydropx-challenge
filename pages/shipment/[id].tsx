import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import { Button, Layout, NotFoundView, TableRates } from "components";
import { getShipment } from "services";
import { removeShipment, startAddLabel, setRates } from "redux/actions";
import Link from "next/link";
import { removeRates } from '../../redux/actions/ratesActions';

const ShipmentPage = ({ rates }: { rates: any }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const label = useSelector((state: any) => state.label);
    const ratesRedux = useSelector((state: any) => state.rates);

    useEffect((): any => {
        dispatch(setRates(rates));
        return () => {
            dispatch(removeShipment())
            dispatch(removeRates())
        };
    }, []); // eslint-disable-line

    useEffect(() => {
        if (Object.keys(label.label).length !== 0) {
            router.push(`/label/${label.label.id}`);
        }
    }, [label.label]); // eslint-disable-line

    const onClickRate = (id: string) => {
        dispatch(startAddLabel(id));
    };

    return (
        <Layout>
            {ratesRedux.rates ? (
                <div className='bg-white max-w-5xl rounded-lg md:mx-auto mt-5 pt-5 shadow-lg mx-3'>
                    <h2 className='text-2xl px-4'>Servicios disponibles</h2>
                    {ratesRedux.rates.length === 0 ? (
                        <div className='mt-5 pb-5'>
                            <h2 className='text-3xl text-center'>
                                No hay servicios para esta cotizacion
                            </h2>
                            <div className="flex justify-center mt-3">
                                <Button className='px-5 py-2 rounded-md text-white bg-blue-500 shadow-md'>
                                    <Link href='/' passHref>
                                        <a>Volver al Inicio</a>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <TableRates
                            rates={ratesRedux.rates}
                            onClickRate={onClickRate}
                        />
                    )}
                </div>
            ) : (
                <NotFoundView />
            )}
        </Layout>
    );
};

export default ShipmentPage;

export const getServerSideProps: GetServerSideProps = async ({
    query,
}: {
    query: any;
}) => {
    try {
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
    } catch (error) {
        return {
            props: {
                rates: null,
            },
        };
    }
};
