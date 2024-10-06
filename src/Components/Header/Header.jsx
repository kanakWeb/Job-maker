import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const link = (
    <>
      <li>
        <NavLink className=" mx-1 text-md font-semibold" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className=" mx-1 text-md font-semibold" to="/jobs">Jobs</NavLink>
      </li>
      <li>
        <NavLink className=" mx-1 text-md font-semibold" to="/applied">Applied Job</NavLink>
      </li>
      <li>
        <NavLink className=" mx-1 text-md font-semibold" to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink className=" mx-1 text-md font-semibold" to="/blogs">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar md:mx-24">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className=" flex justify-center items-center text-2xl font-bold bg-gradient-to-r from-info to-secondary bg-clip-text text-transparent "><span className="text-7xl bg-gradient-to-r from-info  to-secondary bg-clip-text text-transparent -mr-1">J</span>obs Maker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a className="px-3 py-2 rounded-lg bg-blue-400 focus:bg-blue-500 text-white font-semibold">Apply Jobs</a>
      </div>
      </div>
    </div>
  );
};

export default Header;