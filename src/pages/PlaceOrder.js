/*
 *
 * Title: place order
 * Description: place order
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Checkout, ConfirmOrder, Navbar } from '../components';

const PlaceOrder = () => {
  const { serviceId } = useParams();
  const [date, setDate] = useState(new Date());
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  return (
    <div>
      <Navbar />
      <section className="container-area bg-color h-min-nav h-min-nav grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-stretch ">
        <ConfirmOrder
          id={serviceId}
          setDate={setDate}
          setShowPaymentMethod={setShowPaymentMethod}
        />
        <Checkout eventDate={date} id={serviceId} showPaymentMethod={showPaymentMethod} />
      </section>
    </div>
  );
};

export default PlaceOrder;
