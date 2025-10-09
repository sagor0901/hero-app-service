import React from "react";
import { Link } from "react-router";
import playStore from "../../assets/playstore.png.png";
import app from "../../assets/app.png.png";
import hero from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className="">
      {/* text div */}
      <div className="flex flex-col justify-center items-center space-y-5 my-10">
        <h1 className="text-5xl font-bold text-center">
          We Build <br />{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center text-gray-400">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center gap-3">
          <Link to='https://play.google.com/store/games?hl=en' className="flex items-center gap-2">
            <img src={playStore} alt="" /> <span>Google Play</span>
          </Link>
          <Link to='https://www.apple.com/app-store/' className="flex items-center gap-2">
            <img src={app} alt="" /> <span>App Store</span>
          </Link>
        </div>
      </div>
      {/* img div  */}
      <div>
        {/* phone img */}
        <div className="flex justify-center items-center">
          <img src={hero} alt="" />
        </div>
        {/* popularity */}
        <div className="text-center space-y-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  ">
          <h2 className="text-3xl font-bold text-white pt-12 ">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex justify-around max-w-5/10 mx-auto pb-8 pt-4 flex-col md:flex-row items-center">
            <div className="space-y-2">
              <p className="text-gray-300 ">Total Downloads</p>
              <p className="text-6xl font-bold text-white">29.6M</p>
              <p className="text-gray-300 ">21% More Than Last Month</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300 ">Total Reviews</p>
              <p className="text-6xl font-bold text-white">906K
              </p>
              <p className="text-gray-300 ">46% more than last month </p>
            </div><div className="space-y-2">
              <p className="text-gray-300 ">Active Apps</p>
              <p className="text-6xl font-bold text-white">132+</p>
              <p className="text-gray-300 ">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
