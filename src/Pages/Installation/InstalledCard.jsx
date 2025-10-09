import React from "react";
import { Link } from "react-router";
import download from "../../assets/icon-downloads.png";
import ratigImg from "../../assets/icon-ratings.png";

const InstalledCard = ({ app,handleUninstall }) => {
  console.log(app);

  const { image, title, companyName, size,ratingAvg,downloads,id } = app;
  return (
    <div className="my-3">
      <div className="bg-white shadow-md p-2 rounded-lg ">
        <div className="flex justify-between items-center">
          <div className="flex ">
            <img className="h-[60px] rounded-lg" src={image} alt="" />
            <div className="ml-2">
            <h4 className="font-semibold ">
              {title}: {companyName}{" "}
            </h4>
              <div className="flex items-center gap-5">
                <div className="flex gap-1">
                <img className="h-[20px]" src={download} alt="" />
                <p className="text-[#00D390]">{downloads}</p>
              </div>
                <div className="flex gap-1">
                <img className="h-[20px]" src={ratigImg} alt="" />
                <p className="text-[#FF8811]">{ratingAvg}</p>
              </div>
              <p className="text-gray-400" >{size}MB</p>
              </div>
             
              
            </div>
          </div>
          <Link onClick={()=>handleUninstall(id)} className="px-4 py-2 bg-[#00D390] text-white  rounded-lg">
            Uninstall
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstalledCard;
