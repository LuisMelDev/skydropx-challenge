import type { NextPage } from "next";
import { Layout, ShipmentForm } from "components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';

const Home: NextPage = () => {
    const router = useRouter();
    const shipment = useSelector((state:any) => state.shipment)

    useEffect(() => {
        if (Object.keys(shipment.shipment).length !== 0) {
            router.push(`/shipment/${shipment.shipment.id}`);
        }
    }, [shipment.shipment]); // eslint-disable-line

    return (
        <Layout>
            <div className='lg:min-w-max max-w-7xl flex justify-center items-center pt-10'>
                <ShipmentForm/>
            </div>
        </Layout>
    );
};

export default Home;
