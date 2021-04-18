/*
 *
 * Title: checkout
 * Description: after confirm do payment here.
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { CheckoutForm, ResponseMessageBox } from '.';

const Checkout = ({ eventDate, id, showPaymentMethod }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // stripe
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET_KEY);

  return (
    <>
      {showPaymentMethod && (
        <div className="p-3 rounded-md fr-color w-full">
          <h1 className="text-green-400">Complete Payment</h1>

          {errorMessage && (
            <ResponseMessageBox
              isSuccess={false}
              message={errorMessage}
              handler={setErrorMessage}
            />
          )}
          {successMessage && (
            <ResponseMessageBox
              isSuccess={true}
              message={successMessage}
              handler={setSuccessMessage}
            />
          )}

          <Elements stripe={stripePromise}>
            <CheckoutForm
              date={eventDate}
              id={id}
              setSuccess={setSuccessMessage}
              setError={setErrorMessage}
            />
          </Elements>
        </div>
      )}
    </>
  );
};

export default Checkout;
