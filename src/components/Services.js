/*
 *
 * Title: services page
 * Description: services
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import axios from 'axios';
import React, { useEffect } from 'react';
import { SingleServiceBuy } from '.';
import { storeAllServices } from '../store/actions';
import { LOADING_END, LOADING_START } from '../store/constants';
import { useStore } from '../store/Store';

const Services = () => {
  const { state, dispatch } = useStore();

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/services`);

      const { success, services } = response.data;
      if (success) {
        // update store
        storeAllServices(services, dispatch);
      }
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  };

  // get all orders when mounting
  useEffect(() => {
    dispatch({ type: LOADING_START });
    fetchServices();
    dispatch({ type: LOADING_END });
  }, []);

  return (
    <div id="services" className="container-area fr-color py-12">
      <h1 className="text-center text-gray-100 text-4xl font-bold pt-8 font-passion-one">
        OUR PACKAGES
      </h1>
      <div className=" py-8 grid gap-4 items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {state.services.map((service) => (
          <SingleServiceBuy key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
