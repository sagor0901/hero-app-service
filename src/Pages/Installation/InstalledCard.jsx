import React from "react";
import { Link } from "react-router";

const InstalledCard = ({ app }) => {
  console.log(app);

  const { image, title, companyName, size } = app;
  return (
    <div className="my-3">
        <div className="bg-white shadow-md p-2 rounded-lg ">
            <div className="flex justify-between items-center">
                <div className="flex">
                <img className="h-[60px] rounded-lg" src={image} alt="" />
                    <h4 className="font-semibold ml-1">{title}: {companyName} </h4>
                </div>
                <Link className="px-4 py-2 bg-[#00D390] text-white  rounded-lg">Uninstall</Link>
            </div>
        </div>
    </div>
  )
};

export default InstalledCard;
