import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Installation = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <div className="text-center  my-14 space-y-2">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h2>
          <span>({})</span> Apps Found
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
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {/* install app  */}
        <div>
            card
        </div>
    </div>
  );
};

export default Installation;
