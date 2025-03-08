import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router';
 // Note: Ensure correct import path

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = (
    <>
      <li>
        <NavLink to={'/'} className="text-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={'/portfolio'} className="text-lg ">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to={'/skills'} className="text-lg ">
       Skills
        </NavLink>
      </li>
      <li>
        <NavLink to={'/about'} className="text-lg">
        About
        </NavLink>
      </li>
      <li>
        <NavLink to={'/contact'} className="text-lg ">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-black text-white py-4">
 
    </div>
  );
};
