/*
 *
 * Title: reset password
 * Description: reset password form
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { resetPasswordSchema } from '../helpers/schemas';

const ResetPasswordForm = () => {
  // setting up yup
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(resetPasswordSchema)
  });

  // handle submit
  const submit = () => {
    console.log('submitted');
  };

  return (
    <div className="h-min-nav container-area grid place-items-center bg-color">
      <div className="fr-color w-full md:w-2/3 lg:w-1/3 p-3 rounded-md">
        <h1 className="text-green-300 font-montserrat text-2xl font-bold">Reset Password</h1>
        <form className="mt-6" onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="pass" className="block text-green-400 ">
              Password
            </label>
            <input
              type="password"
              id="pass"
              placeholder="Type your password"
              className="bg-color pl-1 w-full py-3 mt-2 text-gray-100"
              {...register('password')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.password?.message}</p>
          </div>

          <div>
            <label htmlFor="confpass" className="block text-green-400 ">
              Confirm Password
            </label>
            <input
              type="password"
              id="confpass"
              placeholder="Type password again"
              className="bg-color pl-1 w-full py-3 mt-2 text-gray-100"
              {...register('confirmPassword')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.confirmPassword?.message}</p>
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-400 mt-3 text-lg text-gray-100 hover:bg-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
