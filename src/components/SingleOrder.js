/*
 *
 * Title: Single Order
 * Description: Single Order details
 * Author: Shah Arafat
 * Date: 17-04-2021
 *
 */
import axios from 'axios';
import React, { useState } from 'react';
import { updateOrderStatusOnStore } from '../store/actions';
import { useStore } from '../store/Store';

const SingleOrder = ({ order, setSuccess, setError }) => {
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [orderStatus, setOrderStatus] = useState('');
  const { state, dispatch } = useStore();

  // destructuring data
  const {
    _id: id,
    status,
    user: { firstName, email },
    service: { name, price },
    eventDate
  } = order;

  // format date
  const date = new Date(eventDate).toDateString();

  // change user role and show update button
  const changeStatus = async (value) => {
    setShowUpdateButton(true);
    setOrderStatus(value);
  };

  // update order status
  const updateOrderStatus = async (id, status) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/orders/changeStatus/${id}`,
        {
          status
        },
        {
          headers: { x_auth_token: localStorage.getItem('x_auth_token') }
        }
      );

      const { success, message } = response.data;
      // set success message
      if (success) {
        setSuccess(message);
        setShowUpdateButton(false);
      }

      // update on store
      updateOrderStatusOnStore(id, orderStatus, state, dispatch);
    } catch (error) {
      // set error message
      setError(error.response?.data?.message);
    }
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center fr-color rounded-md p-3 mt-4 shadow-lg">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3">
        <h1 className="text-2xl font-bold text-green-300">Invoice #{id}</h1>
        <h2 className="text-xl mt-3 font-bold text-gray-100">
          Package: <span className="text-yellow-300">{name}</span>
        </h2>
        <h2 className="text-lg mt-1 text-gray-100">
          Event Date: <span className="text-green-300">{date}</span>
        </h2>
        <p className="text-gray-100">
          Client Name:{' '}
          <span className="text-green-300">
            {firstName} ({email})
          </span>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <select
          value={status}
          onChange={(e) => changeStatus(e.target.value)}
          className={` rounded-sm px-1 py-2 text-white ${
            status === 'pending'
              ? 'bg-red-500'
              : status === 'done'
              ? 'bg-green-500'
              : 'bg-yellow-500'
          }`}
        >
          <option value="pending">Pending</option>
          <option value="ongoing">On Going</option>
          <option value="done">Done</option>
        </select>
        <h1 className="text-xl mt-3 text-gray-100 text-bold">Price: ${price}</h1>

        <button
          onClick={() => updateOrderStatus(id, orderStatus)}
          className={`${
            showUpdateButton ? '' : 'invisible'
          } bg-green-500 hover:bg-green-600 text-gray-100 px-3 mt-3 py-2`}
        >
          Update Status
        </button>
      </div>
    </div>
  );
};

export default SingleOrder;
