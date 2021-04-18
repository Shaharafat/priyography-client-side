/*
 *
 * Title: payment form stripe
 * Description: stripe payment form
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import { useStore } from '../store/Store';

const CheckoutForm = ({ date, id, setError, setSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { state } = useStore();
  const history = useHistory();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    });

    if (error) {
      setError(error.message);
    } else {
      console.log('[PaymentMethod] success', paymentMethod);
      placeOrder(id, date, paymentMethod.card.last4);
    }
  };

  // place order to server
  const placeOrder = async (service, eventDate, cardNo) => {
    try {
      const response = await axios.post(
        '/orders/placeOrder',
        {
          eventDate,
          cardNo,
          service,
          user: state.user.id
        },
        { headers: { x_auth_token: localStorage.getItem('x_auth_token') } }
      );

      const { success } = response.data;
      if (success) {
        setSuccess('Payment Successful and Order placed');

        // goto dashboard to see orders after 2 seconds.
        setTimeout(() => {
          history.replace('/dashboard/orders');
        }, 2000);
      }
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4'
              }
            },
            invalid: {
              color: '#9e2146'
            }
          }
        }}
      />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-green-400 text-white hover:bg-green-500 px-6 py-2 mt-3"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
