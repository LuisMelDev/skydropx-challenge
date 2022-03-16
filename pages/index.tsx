import type { NextPage } from "next";
import { Layout, ShipmentForm } from "components";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="lg:min-w-max max-w-7xl flex justify-center items-center pt-10">
        <ShipmentForm />
      </div>
    </Layout>
  );
};

export default Home;
