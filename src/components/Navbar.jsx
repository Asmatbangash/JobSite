import React from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const navigate = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Referrals", href: "/referrals" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm px-20 max-sm:px-0">
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
            className=" dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navigate.map((item) => (
              <li className="px-4 py-2 text-sm font-bold">
                <NavLink to={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={assets.logo}
          alt="logo"
          className="hidden sm:block w-50 h-auto"
        />
      </div>
      <div className="navbar-end">
        <ul className="px-4 hidden lg:flex">
          {navigate.map((item) => (
            <li className="px-4 text-sm font-bold">
              <NavLink to={item.href}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="bg-[#007f94] text-white rounded-md p-2 me-2 cursor-pointer"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
