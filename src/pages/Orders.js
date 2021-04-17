/*
 *
 * Title: Orders
 * Description: Orders List
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import axios from 'axios';
import React, { useEffect } from 'react';
import { SingleUserOrder } from '../components';
import { storeUserOrders } from '../store/actions';
import { LOADING_END, LOADING_START } from '../store/constants';
import { useStore } from '../store/Store';

const Orders = () => {
  const { state, dispatch } = useStore();

  const fetchUserOrder = async () => {
    console.log(state.user);
    try {
      const response = await axios.get(`/orders/${state.user.id}`, {
        headers: { x_auth_token: localStorage.getItem('x_auth_token') }
      });

      const { success, orders } = response.data;
      if (success) {
        console.log(orders);
        // update store
        storeUserOrders(orders, dispatch);
      }
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    dispatch({ type: LOADING_START });
    fetchUserOrder();
    dispatch({ type: LOADING_END });
    console.log(state);
  }, []);

  return (
    <div>
      <div className="min-h-screen fr-color px-6 py-4">
        <div className="bg-color rounded-md px-2 py-3 shadow-lg">
          <h1 className="font-bold text-2xl text-green-300">Order List</h1>
        </div>

        <div className="bg-color rounded-md mt-3 px-2 py-3 shadow-lg">
          {state.usersOrders.map((order) => (
            <SingleUserOrder key={order._id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
