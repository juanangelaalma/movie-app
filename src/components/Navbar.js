import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false)
  const [isOpenDropdownUser, setIsOpenDropdownUser] = useState(false)

  return (
    <nav className="bg-black fixed top-0 left-0 w-full border-gray-200 px-2 sm:px-4 py-6">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <button onClick={() => setIsOpenNavbar(!isOpenNavbar)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <a href="" className="flex">
          <h1 className="text-white text-3xl font-serif font-bold">MOVIES</h1>
        </a>
        <div className="flex relative items-center md:order-2">
          <button onClick={() => setIsOpenDropdownUser(!isOpenDropdownUser)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
          </button>
          {/* Dropdown Menu */}
          <div className={`${isOpenDropdownUser ? '' : 'hidden '}absolute top-8 right-0 z-50 border border-gray-red shadow-gray-red shadow-xs my-4 text-base list-none bg-black rounded divide-y divide-gray-red`} id="dropdown">
            <div className="py-3 px-4">
              <span className="block text-sm text-white">Bonnie Green</span>
              <span className="block text-sm font-medium text-gray-red truncate">name@movies.com</span>
            </div>
            <ul className="py-1">
              <li>
                <a href="" className="block py-2 px-4 text-sm text-gray-red hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="" className="block py-2 px-4 text-sm text-gray-red hover:text-white">Settings</a>
              </li>
              <li>
                <a href="" className="block py-2 px-4 text-sm text-gray-red hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="" className="block py-2 px-4 text-sm text-gray-red hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Navbar Links */}
        <div className={`${ isOpenNavbar ? 'flex ' : 'hidden ' }justify-between w-80 h-screen md:h-auto md:flex md:w-auto md:order-1`} id="mobile-menu-2">
          <ul className="flex flex-col w-full mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li className="p-2 md:border-b-2 border-orange-400">
              <a href="" className="block py-0 pr-4 pl-3 text-white transition-all md:bg-transparent md:hover:text-white md:p-0" aria-current="page">Home</a>
            </li>
            <li className="p-2">
              <a href="" className="block py-0 pr-4 pl-3 text-gray-red transition-all md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Explore</a>
            </li>
            <li className="p-2">
              <a href="" className="block py-0 pr-4 pl-3 text-gray-red transition-all md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Animation</a>
            </li>
            <li className="p-2">
              <a href="" className="block py-0 pr-4 pl-3 text-gray-red transition-all md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Recomendation</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
