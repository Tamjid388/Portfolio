import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router';
 // Note: Ensure correct import path

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = (
    <>
      <li>
        <NavLink to={'/'} className="text-lg text-gray-700 hover:text-blue-600">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={'/portfolio'} className="text-lg text-gray-700 hover:text-blue-600">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to={'/contact'} className="text-lg text-gray-700 hover:text-blue-600">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-100 py-4">
      <div className="flex items-center justify-between px-4">
        {/* Menu Button for Mobile */}
        <button
          className="sm:hidden text-2xl text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MdMenu />
        </button>

        {/* Navbar */}
        <ul
          className={`flex flex-col hidden md:block sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center items-center transition-all duration-300 
            `
        }
        >
          {menu}
        </ul>

        <ul className={isMenuOpen ? 'block absolute top-14 bg-gray-400  p-4 rounded-2xl transition-all duration-300 ease-in-out' 
          
          : 'hidden'}>
  {menu}
</ul>
      </div>
    </div>
  );
};
