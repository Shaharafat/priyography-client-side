/*
 *
 * Title: Navbar component
 * Description: Navbar component
 * Author: Shah Arafat
 * Date: 15-04-2021
 *
 */
import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className="w-full container-area text-white h-20 py-2 bg-color relative md:static flex justify-between items-center">
      <Link to="/">
        <img src="https://i.postimg.cc/Ls1WSnXp/logo-final.png" alt="site logo" className="w-48" />
      </Link>

      <ul
        className={`absolute md:static top-20 md:top-auto left-0 md:left-auto w-3/4 md:w-auto divide-solid md:divide-none divide-gray-600 divide-y-2 shadow-2xl md:shadow-none bg-color md:flex transform transition-all ${
          mobileNavOpen ? '' : '-translate-x-full'
        } md:-translate-x-0 nav-main`}
        id="nav-main"
      >
        <li className="mx-2">
          <Link to="#" className="nav-link-styles font-montserrat">
            Home
          </Link>
        </li>
        <li className="mx-2">
          <Link to="#" className="nav-link-styles font-montserrat">
            Services
          </Link>
        </li>
        <li className="mx-2">
          <Link to="#" className="nav-link-styles font-montserrat">
            Works
          </Link>
        </li>
        <li className="mx-2">
          <Link to="#" className="nav-link-styles font-montserrat">
            Reviews
          </Link>
        </li>
        <li className="mx-2">
          <Link to="#Teams" className="nav-link-styles font-montserrat">
            Teams
          </Link>
        </li>
      </ul>
      <div className="text-xl md:hidden rounded-full px-2 py-1">
        {mobileNavOpen ? (
          <MdClose className="text-2xl" onClick={() => setMobileNavOpen(false)} />
        ) : (
          <MdMenu onClick={() => setMobileNavOpen(true)} className="text-2xl" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
