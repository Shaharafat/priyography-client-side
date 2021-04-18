/*
 *
 * Title: Footer
 * Description: Site Footer
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import React from 'react';
import { FaMapSigns } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="container-area py-12 bg-green-500 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <address className="not-italic text-gray-100">
          <FaMapSigns className="inline-block mr-1" /> VIP Tower (5th Floor), Kazir Dewri,
          Chittagong, Bangladesh
        </address>
      </div>
      <div className="flex flex-col items-start text-gray-100">
        <h1 className="font-bold">Company</h1>
        <ul>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Project
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start text-gray-100">
        <h1 className="font-bold">Quick Links</h1>
        <ul>
          <li>
            <a href="#" className="hover:underline">
              Rentals
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Sales
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Our Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start text-gray-100">
        <h1 className="font-bold">About Us</h1>
        <p>
          We are photography team. We provide one of the best creation in Bangladesh. We have modern
          materials and best photographers to make you happy.{' '}
        </p>
      </div>
    </div>
  );
};

export default Footer;
