/*
 *
 * Title: confirm order section
 * Description: select event date and then book
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { ResponseMessageBox } from '.';
import { LOADING_END, LOADING_START } from '../store/constants';
import { useStore } from '../store/Store';

const ConfirmOrder = ({ id, setDate, setShowPaymentMethod }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [serviceData, setServiceData] = useState('');
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const { dispatch } = useStore();

  // check availability
  const checkAvailability = async (date) => {
    console.log(date);
    setShowConfirmButton(false);

    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/orders/date`, {
        date
      });
      const { success } = response.data;
      if (success) {
        setShowConfirmButton(true);
        setDate(date); // to send it on checkout form
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message);
    }
  };

  // get order matched to id
  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/services/${id}`);
      const { success, service } = response.data;
      if (success) {
        setServiceData(service);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message);
    }
  };

  useEffect(() => {
    dispatch({ type: LOADING_START });
    fetchOrder();
    dispatch({ type: LOADING_END });
  }, []);

  return (
    <div className="p-3 rounded-md fr-color w-full">
      {errorMessage && (
        <ResponseMessageBox isSuccess={false} message={errorMessage} handler={setErrorMessage} />
      )}
      {/* service details */}
      {serviceData && (
        <div className="mt-3">
          <h1 className="text-2xl font-bold text-green-300">{serviceData.name}</h1>
          {
            <ul className="mt-3 mb-4 self-start">
              {serviceData.serviceDetails.map((facilities, index) => (
                <li key={index} className="text-lg text-gray-100 py-1 flex items-center">
                  {' '}
                  <FaCheckCircle className="inline-block text-green-400 mr-2" /> {facilities.trim()}{' '}
                </li>
              ))}
            </ul>
          }
          <h2 className="text-2xl mt-3 font-bold text-yellow-300">${serviceData.price}</h2>
          <input
            type="date"
            onChange={(e) => checkAvailability(e.target.value)}
            className="mt-3 w-full px-1 py-2"
          />
          {/* purchase button */}
          <button
            onClick={() => setShowPaymentMethod(true)}
            className={`px-6 py-2 bg-green-500 hover:bg-green-600 text-gray-100 mt-4 ${
              showConfirmButton ? '' : 'invisible'
            } `}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmOrder;
