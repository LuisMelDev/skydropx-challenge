import Link from "next/link";
import { Button, Layout } from "components";
import { getLabel } from "services";
import { useState } from "react";

const Label = ({ attributes }: { attributes: any }) => {
    console.log(attributes);
    return (
        <Layout>
            <div className='max-w-xl mt-5 p-4 mx-auto bg-white rounded-lg shadow-lg'>
                <h1 className='text-2xl text-center'>
                    Su guía se ha generado con éxito.
                </h1>
                <div className='flex justify-center mt-4'>
                    <a
                        href={attributes.label_url}
                        target='_blank'
                        rel='noopenner noreferrer'
                    >
                        <Button className='px-5 py-2 rounded-md text-white bg-blue-500'>
                            Descargar Guia
                        </Button>
                    </a>
                </div>
                <div className='flex justify-center mt-7'>
                    <Link href={"/"} passHref>
                        <a className='text-stone-800 text-center underline decoration-1'>
                            Volver al inicio
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Label;

export const getServerSideProps = async ({ query }: { query: any }) => {
    const resp = await getLabel(query.id);
    const data = resp.data.data;

    return {
        props: {
            attributes: data.attributes || {},
        },
    };
};
