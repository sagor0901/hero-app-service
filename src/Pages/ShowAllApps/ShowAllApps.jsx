import React from "react";
import { useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";

const ShowAllApps = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="max-w-11/12 mx-auto my-16">
      <div className="text-center my-14 space-y-2">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
       <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-bold"> <span>({data.length})</span> Apps Found</h1>
        <input  className="border-2 border-gray-400 rounded-lg p-2" placeholder="search app" type="search" />
       </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((app) => (
          <SingleApp key={app.id} app={app}></SingleApp>
        ))}
      </div>
    </div>
  );
};

export default ShowAllApps;
