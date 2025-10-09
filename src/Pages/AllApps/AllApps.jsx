import React, { Suspense} from "react";
import SingleApp from "../SingleApp/SingleApp";
import { Link } from "react-router";

const AllApps = ({ data }) => {

  const fetauredApps = data.slice(0, 8);
  return (
    <div className="mx-auto w-11/12">
      <div className="text-center my-14 space-y-2">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <Suspense fallback={<span>Loading</span>}>
       

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fetauredApps.map((app) => (
            <SingleApp key={app.id} app={app}>
              
            </SingleApp>
          ))}
        </div>
      </Suspense>
      <div className="flex justify-center my-5">
        <Link
          to="/showAllApps"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-12 py-6 text-white font-bold"
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default AllApps;
