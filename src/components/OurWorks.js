/*
 *
 * Title: our works
 * Description: our works
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import React from 'react';
import images from '../helpers/worksData';

const OurWorks = () => {
  return (
    <div className="container-area bg-color py-12">
      <h1 className="text-center text-gray-100 text-4xl font-bold pt-8 font-passion-one">
        OUR WORKS
      </h1>
      <div className=" py-8 grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image) => (
          <img src={image} key={image} alt="image" />
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
