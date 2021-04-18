/*
 *
 * Title: Orders list
 * Description: orders list
 * Author: Shah Arafat
 * Date: 17-04-2021
 *
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ResponseMessageBox, SingleOrder } from '.';
import { storeAllOrder } from '../store/actions';
import { LOADING_END, LOADING_START } from '../store/constants';
import { useStore } from '../store/Store';

const OrderList = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { state, dispatch } = useStore();

  // get all users from server
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/orders`, {
        headers: { x_auth_token: localStorage.getItem('x_auth_token') }
      });

      const { success, orders } = response.data;
      if (success) {
        // update store
        storeAllOrder(orders, dispatch);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message);
    }
  };

  // get all orders when mounting
  useEffect(() => {
    dispatch({ type: LOADING_START });
    fetchOrders();
    dispatch({ type: LOADING_END });
    console.log(state);
  }, []);

  return (
    <div>
      <div className="min-h-screen fr-color px-6 py-4">
        <div className="bg-color rounded-md px-2 py-3 shadow-lg">
          <h1 className="font-bold text-2xl text-green-300">All Orders</h1>
        </div>

        <div className="bg-color rounded-md px-2 mt-3 py-3 shadow-lg">
          {/* show error message */}
          {errorMessage && (
            <ResponseMessageBox
              isSuccess={false}
              message={errorMessage}
              handler={setErrorMessage}
            />
          )}
          {/* show success message */}
          {successMessage && (
            <ResponseMessageBox
              isSuccess={true}
              message={successMessage}
              handler={setSuccessMessage}
            />
          )}
          {state.orders.map((order) => (
            <SingleOrder
              key={order._id}
              order={order}
              setSuccess={setSuccessMessage}
              setError={setErrorMessage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
