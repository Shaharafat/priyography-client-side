/*
 *
 * Title: single service
 * Description: single service to manage dashboard
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import axios from 'axios';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { updateServiceAfterDeleteOnStore } from '../store/actions';
import { useStore } from '../store/Store';

const SingleServiceDashboard = ({ service, setSuccess, setError }) => {
  const { state, dispatch } = useStore();
  const { _id: id, name, price } = service;

  // update order status
  const deleteService = async (id) => {
    try {
      const response = await axios.delete(`/services/delete/${id}`, {
        headers: { x_auth_token: localStorage.getItem('x_auth_token') }
      });

      const { success, message } = response.data;
      // set success message
      if (success) {
        setSuccess(message);
      }

      // update on store
      updateServiceAfterDeleteOnStore(id, state, dispatch);
    } catch (error) {
      // set error message
      setError(error.response?.data?.message);
    }
  };
  return (
    <div className="grid grid-cols-3 gap-4 mt-3 shadow-lg fr-color p-2 items-center rounded-md">
      <h1 className="text-green-300 text-lg">{name}</h1>
      <h1 className="text-yellow-400 text-lg">${price}</h1>

      <button
        onClick={() => deleteService(id)}
        className="text-gray-100 bg-red-600 hover:bg-red-700 px-3 py-2"
      >
        <FaTrashAlt className="inline-block mr-2" /> Delete
      </button>
    </div>
  );
};

export default SingleServiceDashboard;
