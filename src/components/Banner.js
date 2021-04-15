/*
 *
 * Title: Banner
 * Description: Banner
 * Author: Shah Arafat
 * Date: 15-04-2021
 *
 */
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="container-area bg-color h-min-nav max-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center ">
      <div>
        <h1 className="text-5xl uppercase font-bold w-full xl:w-2/3 font-passion-one tracking-wide text-green-400">
          We Capture Your Memorable Moment
        </h1>
        <h2 className="text-gray-100 text-md text-bold mt-4">
          Weeding <span className="text-green-400">|</span> Pre-Weeding{' '}
          <span className="text-green-400">|</span> Holud
        </h2>
        <Link
          to="#services"
          className="bg-green-500 hover:bg-green-600 inline-block text-gray-100 px-6 py-2 mt-4 text-lg rounded-md"
        >
          Book Now
        </Link>
      </div>
      <div>
        <img src="https://i.postimg.cc/nrRkfkYL/bannerimage.png" alt="bride" />
      </div>
    </section>
  );
};

export default Banner;
