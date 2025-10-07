import React from "react";
import { Link } from "react-router";
import playStore from "../../assets/playstore.png.png";
import app from "../../assets/app.png.png";

const Banner = () => {
  return (
    <div>
      <h1>its banner</h1>
      <p></p>
      <div className="flex items-center gap-3">
        <Link className="flex items-center gap-2">
          <img src={playStore} alt="" /> <span>Google Play</span>
        </Link>
        <Link className="flex items-center gap-2">
          <img src={app} alt="" /> <span>Google Play</span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
