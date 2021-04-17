/*
 *
 * Title: Home Component
 * Description: Homepage
 * Author: Shah Arafat
 * Date: 15-04-2021
 *
 */
import React from 'react';
import { Banner, Navbar } from '../components';
import { useStore } from '../store/Store';

const Home = () => {
  const { state } = useStore();
  console.log(state);
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
