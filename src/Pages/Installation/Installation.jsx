import React, { useEffect, useState} from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../utility/addToDB";
import InstalledCard from "./InstalledCard";

const Installation = () => {
    const [installedApps, setInstalledApps]=useState([])
    const data = useLoaderData()

    

 useEffect(()=>{
    const storedAppData =getStoredApp()

    const convertedStoredApp = storedAppData.map(id=>parseInt(id))

    const myInstallList = data.filter(app=>convertedStoredApp.includes(app.id))
    setInstalledApps(myInstallList)
 },[data])

 const handleUninstall = id =>{
    const remainingApps = installedApps.filter(app=>app.id !==id)
    setInstalledApps(remainingApps)
    localStorage.setItem('readList', JSON.stringify(remainingApps.map(app=> app.id)))
 }

  return (
    <div className="max-w-11/12 mx-auto">
      <div className="text-center  my-14 space-y-2">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          <span>({installedApps.length})</span> Apps Found
        </h2>

        <div className="dropdown  dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="flex border px-4 py-2 rounded-lg  items-center text-gray-400 m-1">
            Sort By Size <span><IoMdArrowDropdown /></span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>High-size</a>
            </li>
            <li>
              <a>Low-size</a>
            </li>
          </ul>
        </div>
      </div>
      {/* install app  */}
        <div>
            {
                installedApps.map(app=><InstalledCard handleUninstall={handleUninstall} key={app.id} app={app}></InstalledCard>)
            }
        </div>
    </div>
  );
};

export default Installation;
