/*
 *
 * Title: Signup Form
 * Description: Signup form component
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { ResponseMessageBox } from '.';
import { signupSchema } from '../helpers/schemas';
import { SIGNIN_USER } from '../store/constants';
import { useStore } from '../store/Store';

const SignupForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { dispatch } = useStore();
  const history = useHistory();

  // setting up yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(signupSchema),
  });

  const submitSignupForm = async (data) => {
    const { firstName, lastName, username, email, password } = data;

    // make request to server to register user
    try {
      const response = await axios.post('/users/register', {
        firstName,
        lastName,
        username,
        email,
        password,
      });
      // if success get token
      const { success, token } = response.data;
      if (success) {
        // show success message
        setSuccessMessage('Registration Successful.');
        // set token to local storage
        localStorage.setItem('x_auth_token', 'Bearer' + ' ' + token);
        // get user data and set to state
        const { user } = jwt_decode(token);
        dispatch({ type: SIGNIN_USER, payload: { user } });
        history.push('/');
      }
    } catch (error) {
      // show error message
      setErrorMessage(error.response?.data?.message);
    }
  };

  return (
    <div className="h-min-nav container-area grid place-items-center bg-color">
      <div className="fr-color w-full md:w-2/3 lg:w-1/3 p-3 rounded-md">
        <h1 className="text-green-300 font-montserrat text-2xl font-bold mb-2">Signup</h1>
        {/* success message */}
        {successMessage && (
          <ResponseMessageBox
            isSuccess={true}
            message={successMessage}
            handler={setSuccessMessage}
          />
        )}
        {/* error message */}
        {errorMessage && (
          <ResponseMessageBox isSuccess={false} message={errorMessage} handler={setErrorMessage} />
        )}
        <form className="mt-6" onSubmit={handleSubmit(submitSignupForm)}>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="firstname" className="text-green-400 ">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="Type your first name"
                className="bg-color pl-1 w-full py-3 mt-2 text-gray-100"
                {...register('firstName')}
              />
              <p className="text-sm text-red-500 mt-1">{errors.firstName?.message}</p>
            </div>
            <div>
              <label htmlFor="lastname" className="text-green-400 ">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Type your last name"
                className="bg-color pl-1 w-full py-3 mt-2 text-gray-100"
                {...register('lastName')}
              />
              <p className="text-sm text-red-500 mt-1">{errors.lastName?.message}</p>
            </div>
          </div>

          {/* user name */}
          <div>
            <label htmlFor="username" className="text-green-400 ">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Type username"
              className="bg-color pl-1 w-full py-3 mt-2 text-gray-100"
              {...register('username')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.username?.message}</p>
          </div>

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

          <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2">
            {/* password */}
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

            {/* confirm password */}
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
          <span className="text-gray-100 block mt-3">
            Already have an account?{' '}
            <Link to="/login" className="text-green-300 hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
