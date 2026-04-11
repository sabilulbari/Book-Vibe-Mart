import React from "react";
import { Link, NavLink } from "react-router";
import "../../../index.css";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    "px-4 py-2 rounded-md border transition-colors duration-200 " +
    (isActive ? "border-[#23BE0A] text-[#23BE0A] font-semibold" : "border-transparent text-base-content hover:border-[#23BE0A] hover:text-[#23BE0A]");

  const links = (
    <>
      <li>
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClass} to="listedBook">
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClass} to="bookChart">
          Book Chart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 work-sans w-[90%] mx-auto shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[12px]">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center  hidden lg:flex ">
        <ul className=" items-center   flex  text-[12px]  justify-center gap-12 ">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
