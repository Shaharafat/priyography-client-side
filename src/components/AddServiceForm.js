/*
 *
 * Title: Add Service form
 * Description: Form to add new Service
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaImage, FaPlus } from 'react-icons/fa';
import { addServiceFormSchema } from '../helpers/schemas';

const AddServiceForm = () => {
  const [fileName, setFileName] = useState('No file choosen.');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(addServiceFormSchema),
  });

  const submit = (data) => {
    console.log(data);
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    // set file name
    setFileName(file.name);
    // create blob of file to upload in cloudinary
    createBlob(file);
  };

  const createBlob = (file) => {
    // create reader
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // will goto cloudinary from here.
      console.log(reader.result);
    };
  };

  return (
    <div className="p-4 bg-color rounded-md shadow-xl mt-3">
      <h2 className="text-gray-100 text-xl">Service Details</h2>

      <form className="mt-3" onSubmit={handleSubmit(submit)}>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div>
            <label htmlFor="servicename" className="text-green-400 ">
              Service Name
            </label>
            <input
              type="text"
              id="service"
              placeholder="Type service name"
              className="fr-color pl-1 w-full py-3 mt-2 text-gray-100"
              {...register('name')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="price" className="text-green-400 ">
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Type service price"
              className="fr-color pl-1 w-full py-3 mt-2 text-gray-100"
              {...register('price')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.price?.message}</p>
          </div>
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          <div className="mt-3">
            <label htmlFor="features" className="text-green-400 ">
              Features
            </label>
            <textarea
              id="features"
              placeholder="Features must be comma separated."
              className="fr-color pl-1 w-full py-3 mt-2 text-gray-100"
              cols="30"
              rows="10"
              {...register('serviceDetails')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.serviceDetails?.message}</p>
          </div>

          <div className="mt-5">
            <div className="flex items-center">
              <label
                htmlFor="image"
                className="bg-green-400 hover:bg-green-500 md:mt-6 px-6 text-gray-100 py-2 cursor-pointer mr-2"
              >
                <FaImage className="mr-2 inline-block  " />
                Upload Image
              </label>
              <p className="text-gray-100 md:mt-6">{fileName}</p>
            </div>
            <input type="file" id="image" onChange={uploadImage} hidden />
          </div>
        </div>
        <button className="bg-green-400 hover:bg-green-500 mt-6 py-2 px-3 flex items-center text-white">
          {' '}
          <FaPlus className="inline-block mr-2" /> Submit
        </button>
      </form>
    </div>
  );
};

export default AddServiceForm;
