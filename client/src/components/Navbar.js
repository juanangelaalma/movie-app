import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false)

  return (
    <nav className="bg-black fixed top-0 left-0 z-10 w-full border-gray-200 px-2 sm:px-4 py-6">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <button onClick={() => setIsOpenNavbar(!isOpenNavbar)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <Link to="/" className="flex">
          <h1 className="text-white text-3xl font-serif font-bold">MOVIES</h1>
        </Link>
        <Profile />
        {/* Navbar Links */}
        <div className={`${ isOpenNavbar ? 'flex ' : 'hidden ' }justify-between w-80 h-screen md:h-auto md:flex md:w-auto md:order-1`} id="mobile-menu-2">
          <ul className="flex flex-col w-full mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li className="p-2" onClick={() => isOpenNavbar && setIsOpenNavbar(false)}>
              {/* NavLink will be add .action class when clicked */}
              <NavLink exact="true" to="/" className="block py-0 pr-4 pl-3 text-gray-red transition-all md:bg-transparent md:hover:text-white md:p-0">Home</NavLink>
            </li>
            <li className="p-2" onClick={() => isOpenNavbar && setIsOpenNavbar(false)}>
              {/* NavLink will be add .action class when clicked */}
              <NavLink exact="true" to="/explore" className="block py-0 pr-4 pl-3 text-gray-red transition-all md:bg-transparent md:hover:text-white md:p-0">Explore</NavLink>
            </li>
            <li className="p-2" onClick={() => isOpenNavbar && setIsOpenNavbar(false)}>
              {/* NavLink will be add .action class when clicked */}
              <NavLink exact="true" to="/animation" className="block py-0 pr-4 pl-3 text-gray-red transition-all md:bg-transparent md:hover:text-white md:p-0">Animation</NavLink>
            </li>
            <li className="p-2" onClick={() => isOpenNavbar && setIsOpenNavbar(false)}>
              {/* NavLink will be add .action class when clicked */}
              <NavLink exact="true" to="/recommendation" className="block py-0 pr-4 pl-3 text-gray-red transition-all md:bg-transparent md:hover:text-white md:p-0">Recommendation</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
