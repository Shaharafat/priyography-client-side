/*
 *
 * Title: Loader
 * Description: Loader
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import React from 'react';
import loader from '../icon/loader.svg';

const Loader = () => {
  return (
    <div className="min-h-screen bg-color grid place-items-center">
      <img src={loader} alt="loader" className="w-28" />
    </div>
  );
};

export default Loader;
