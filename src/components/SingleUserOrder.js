/*
 *
 * Title: single user order
 * Description: single user order
 * Author: Shah Arafat
 * Date: 18-04-2021
 *
 */
import React from 'react';

const SingleUserOrder = ({ order }) => {
  const {
    _id: id,
    status,
    user: { firstName, email },
    service: { name, price },
    eventDate
  } = order;

  // format date
  const date = new Date(eventDate).toDateString();

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
        <h1
          className={`${
            status === 'pending'
              ? 'bg-red-500'
              : status === 'done'
              ? 'bg-green-500'
              : 'bg-yellow-500'
          } text-gray-100 px-2 py-1 rounded-md`}
        >
          {status}
        </h1>
        <h1 className="text-xl mt-3 text-gray-100 text-bold">Price: ${price}</h1>
      </div>
    </div>
  );
};

export default SingleUserOrder;
