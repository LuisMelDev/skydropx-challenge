import type { NextPage } from "next";
import { Layout, ShipmentForm } from "components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const [shipment, setShipment] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (shipment !== "") {
            router.push(`/shipment/${shipment}`);
        }
    }, [shipment]); // eslint-disable-line

    return (
        <Layout>
            <div className='lg:min-w-max max-w-7xl flex justify-center items-center pt-10'>
                <ShipmentForm setShipment={setShipment} />
            </div>
        </Layout>
    );
};

export default Home;
