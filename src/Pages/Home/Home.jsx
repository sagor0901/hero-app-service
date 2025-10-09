import React from "react";
import Banner from "../../components/Banner/Banner";

import AllApps from "../AllApps/AllApps";
import { useLoaderData } from "react-router";

const Home = () => {
    const data = useLoaderData()

    
  return (
    <div>
      <Banner></Banner>
      <AllApps data={data}></AllApps>
    </div>
  );
};

export default Home;
