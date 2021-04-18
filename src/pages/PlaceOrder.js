/*
 *
 * Title: place order
 * Description: place order
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import React from 'react';
import { useParams } from 'react-router';
import { Checkout, ConfirmOrder, Navbar } from '../components';

const PlaceOrder = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <Navbar />
      <section className="container-area bg-color h-min-nav h-min-nav grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center ">
        <ConfirmOrder id={serviceId} />
        <Checkout />
      </section>
    </div>
  );
};

export default PlaceOrder;
