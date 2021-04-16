/*
 *
 * Title: Add new sevice
 * Description: Add new service
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import React from 'react';
import { AddServiceForm } from '.';

const AddService = () => {
  return (
    <div>
      <div className="min-h-screen fr-color px-6 py-4">
        <div className="bg-color rounded-md px-2 py-3 shadow-lg">
          <h1 className="font-bold text-2xl text-green-300">Add New Service</h1>
        </div>

        <AddServiceForm />
      </div>
    </div>
  );
};

export default AddService;
