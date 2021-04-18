/*
 *
 * Title: Home Component
 * Description: Homepage
 * Author: Shah Arafat
 * Date: 15-04-2021
 *
 */
import React from 'react';
import { Banner, Footer, Navbar, OurWorks, Reviews, Services, Teams } from '../components';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <OurWorks />
      <Teams />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
