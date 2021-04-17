/*
 *
 * Title: Forgot password form
 * Description: forgot password form
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema } from '../helpers/schemas';

const ForgotPasswordForm = () => {
  // setting up yup
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(forgotPasswordSchema)
  });

  const submit = () => {
    console.log('submitted');
  };

  return (
    <div className="h-min-nav container-area grid place-items-center bg-color">
      <div className="fr-color w-full md:w-2/3 lg:w-1/3 p-3 rounded-md">
        <h1 className="text-green-300 font-montserrat text-2xl font-bold">Forgot Password</h1>
        <form className="mt-6" onSubmit={handleSubmit(submit)}>
          {/* email */}
          <div>
            <label htmlFor="email" className="block text-green-400 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Type your email"
              className="bg-color pl-1 w-full py-3 mt-2 text-gray-100"
              {...register('email')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.email?.message}</p>
          </div>
          {/* submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-400 mt-3 text-lg text-gray-100 hover:bg-green-500"
          >
            Submit
          </button>
        </form>
        {/* signup, forgot password option */}
        <div className="border-t border-green-200 w-full mt-4 py-3 text-center">
          <span className="text-gray-100 block">
            <Link to="/login" className="text-green-300 hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
