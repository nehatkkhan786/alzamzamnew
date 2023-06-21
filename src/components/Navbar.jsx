import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case md:text-xl">
          Al ZAMZAM EXPORT COMPANY
        </a>
      </div>
      <div className="flex-none">
        <div className=" gap-3 hidden md:flex">
          <Link className="uppercase cursor-pointer font-medium">Home</Link>
          <Link className="uppercase cursor-pointer font-medium">About</Link>
          <Link className="uppercase cursor-pointer font-medium">Shop</Link>
          <Link className="uppercase cursor-pointer font-medium">Contact</Link>`
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar z-999">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-11111"
          >
            <li className="z-999999">
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
