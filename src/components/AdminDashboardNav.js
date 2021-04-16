/*
 *
 * Title: Admin Dashboard sidebar
 * Description: Admin Dashboard sidebar
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import React from 'react';
import { FaBorderNone, FaDelicious, FaHome, FaListUl, FaPlus, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboardNav = () => {
  return (
    <nav className="w-max min-h-screen bg-color shadow-2xl">
      {/* sidebar */}
      <ul>
        <li className="mx-1">
          <Link to={`/admin`} className="text-green-300 w-full px-2 py-3 block dashboard-link ">
            <FaDelicious className="inline-block mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to={`/admin/users`}
            className="text-green-300 w-full px-2 py-3 block dashboard-link "
          >
            <FaUsers className="inline-block mr-2" />
            Users
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to={`/admin/orders`}
            className="text-green-300 w-full px-2 py-3 block dashboard-link "
          >
            <FaListUl className="inline-block mr-2" />
            Orders
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to={`/admin/addService`}
            className="text-green-300 w-full px-2 py-3 block dashboard-link "
          >
            <FaPlus className="inline-block mr-2" />
            Add Service
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to={`/admin/manageServices`}
            className="text-green-300 w-full px-2 py-3 block dashboard-link "
          >
            <FaBorderNone className="inline-block mr-2" />
            Manage Services
          </Link>
        </li>
        <li className="mx-1">
          <Link to={`/`} className="text-green-300 w-full px-2 py-3 block dashboard-link ">
            <FaHome className="inline-block mr-2" />
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminDashboardNav;
