import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import github from "../../assets/github.png";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className={({isActive})=>
    `m-2 ${isActive? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-b-2 border-indigo-600 font-bold':'text-blck'}`
    }>
        Home
      </NavLink>
      <NavLink to="/showAllApps" className={({isActive})=>
    `m-2 ${isActive? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-b-2 border-indigo-600 font-bold':'text-blck'}`
    }>
        Apps
      </NavLink>
      <NavLink to="installation" className={({isActive})=>
    `m-2 ${isActive? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-b-2 border-indigo-600 font-bold':'text-blck'}`
    }>
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="navbar  bg-base-100 shadow-sm">
      <div className="flex w-11/12 justify-between mx-auto items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link className="flex items-center gap-2">
            <img className="h-[40px]" src={logo} alt="" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to='https://github.com/sagor0901/hero-app-service' className="flex items-center gap-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-lg text-white ">
            <img src={github} alt="" />
            <p className="font-bold text-">Contribute</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
