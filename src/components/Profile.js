import React, { useState } from "react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDetectOutsideClick } from "../utils";

const Profile = () => {
  const dropdownRef = useRef(null)
  const [iseActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const onClick = () => setIsActive(!iseActive)

  return (
    <div className="flex relative items-center md:order-2">
      <button
        onClick={onClick}
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-red"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt=""
        />
      </button>
      {/* Dropdown Menu */}
      <div
        className={`${ iseActive ? "" : "hidden " }absolute top-8 right-0 z-50 border border-gray-red shadow-gray-red shadow-xs my-4 text-base list-none bg-black rounded divide-y divide-gray-red`}
        // Ref Dropdown
        ref={dropdownRef}
      >
        <div className="py-3 px-4">
          <span className="block text-sm text-white">Bonnie Green</span>
          <span className="block text-sm font-medium text-gray-red truncate">
            name@movies.com
          </span>
        </div>
        <ul className="py-1">
          <li>
            <NavLink
              to="/user/dashboard"
              className="block py-2 px-4 text-sm text-gray-red hover:text-white"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <Link
              to="/user/settings"
              className="block py-2 px-4 text-sm text-gray-red hover:text-white"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/user/earnings"
              className="block py-2 px-4 text-sm text-gray-red hover:text-white"
            >
              Earnings
            </Link>
          </li>
          <li>
            <Link
              to="/user/sign-out"
              className="block py-2 px-4 text-sm text-gray-red hover:text-white"
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
