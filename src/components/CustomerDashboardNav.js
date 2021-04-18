/*
 *
 * Title: customer dashboard sidebar
 * Description: customer dashboard
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import React from 'react';
import { FaHome, FaRegCommentAlt, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomerDashboardNav = () => {
  return (
    <nav className=" w-40 h-min-nav bg-color shadow-2xl">
      {/* sidebar */}
      <ul>
        <li className="mx-1">
          <Link
            to={`/dashboard/orders`}
            className="text-green-300 w-full pl-2 py-3 block dashboard-link "
          >
            <FaShoppingCart className="inline-block mr-2" />
            Order List
          </Link>
        </li>
        <li className="mx-1">
          <Link
            to={`/dashboard/writeReview`}
            className="text-green-300 w-full pl-2 py-3 block dashboard-link "
          >
            <FaRegCommentAlt className="inline-block mr-2" />
            Write a Review
          </Link>
        </li>
        <li className="mx-1">
          <Link to={`/`} className="text-green-300 w-full pl-2 py-3 block dashboard-link ">
            <FaHome className="inline-block mr-2" />
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CustomerDashboardNav;
