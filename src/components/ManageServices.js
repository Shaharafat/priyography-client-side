/*
 *
 * Title: Manage Service
 * Description: Manage Service
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ResponseMessageBox, SingleServiceDashboard } from '.';
import { storeAllServices } from '../store/actions';
import { LOADING_END, LOADING_START } from '../store/constants';
import { useStore } from '../store/Store';

const ManageServices = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { state, dispatch } = useStore();

  // get all users from server
  const fetchServices = async () => {
    try {
      const response = await axios.get('/services');

      const { success, services } = response.data;
      if (success) {
        // update store
        storeAllServices(services, dispatch);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message);
    }
  };

  // get all orders when mounting
  useEffect(() => {
    dispatch({ type: LOADING_START });
    fetchServices();
    dispatch({ type: LOADING_END });
    console.log(state.services);
  }, []);

  return (
    <div>
      <div className="min-h-screen fr-color px-6 py-4">
        <div className="bg-color rounded-md px-2 py-3 shadow-lg">
          <h1 className="font-bold text-2xl text-green-300">Manage Services</h1>
        </div>
        <div className="bg-color rounded-md mt-3 px-2 py-3 shadow-lg">
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
          {state.services.map((service) => (
            <SingleServiceDashboard
              key={service._id}
              service={service}
              setSuccess={setSuccessMessage}
              setError={setErrorMessage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
