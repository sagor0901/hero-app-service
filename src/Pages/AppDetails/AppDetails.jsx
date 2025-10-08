import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import ratigImg from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);
  console.log(singleApp);

  const { title, image, companyName, downloads, reviews, size, ratingAvg } =
    singleApp;
  console.log(singleApp);

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="">
        <div className=" flex flex-col md:flex-row gap-10  ">
          <img className="h-[300px]" src={image} />
          <div className="w-full">
            <div className=" border-b-1 border-gray-400 ">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="text-gray-400 mb-7">
                Developed by{" "}
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold">
                  {companyName}
                </span>
              </p>
            </div>
            <div className="">
              <div className="flex gap-4 justify-start  my-4">
                <div className=" px-3 py-2 rounded-lg space-y-2 ">
                <img className="h-[30px]" src={download} alt="" />
                <p className="text-gray-400">Downloads</p>
                <p className="font-bold text-5xl">{downloads}</p>
              </div>
                <div className=" px-3 py-2 rounded-lg space-y-2">
                <img className="h-[30px]" src={ratigImg} alt="" />
                <p className="text-gray-400">Downloads</p>
                <p className="font-bold text-5xl">{ratingAvg}</p>
              </div>
                <div className=" px-3 py-2 rounded-lg space-y-2">
                <img className="h-[30px]" src={reviewIcon} alt="" />
                <p className="text-gray-400">Downloads</p>
                <p className="font-bold text-5xl">{reviews}</p>
              </div>
              </div>
              
              <Link className="bg-[#00D390] text-white px-5 py-4 rounded-lg" >
              Install Now <span>({size})</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
