/*
 *
 * Title: Single service
 * Description: Single service to show services on homepage
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import { Image } from 'cloudinary-react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleServiceBuy = ({ service }) => {
  const { _id: id, name, price, serviceDetails, imageUrl } = service;
  return (
    <div className="bg-color shadow-lg p-2 flex flex-col items-center">
      {/* image */}
      <Image
        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
        publicId={imageUrl}
        crop="scale"
        width="128"
        className="hover:scale-110 transform transition-transform"
      />
      <h1 className="text-xl text-green-400 mt-3 text-center">{name}</h1>
      <h1 className="text-3xl text-purple-400 mt-2 font-bold text-center">${price}</h1>
      {/* package features */}
      {
        <ul className="mt-3 mb-4 self-start">
          {serviceDetails.map((facilities, index) => (
            <li key={index} className="text-lg text-gray-100 py-1 flex items-center">
              {' '}
              <FaCheckCircle className="inline-block text-green-400 mr-2" /> {facilities.trim()}{' '}
            </li>
          ))}
        </ul>
      }
      {/* submit button */}
      <Link
        to={`/placeOrder/${id}`}
        className="bg-green-500 hover:bg-green-600 w-full mt-auto py-2 text-gray-100 text-lg text-center"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default SingleServiceBuy;
