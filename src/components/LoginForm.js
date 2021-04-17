/*
 *
 * Title: login form
 * Description: login form
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ResponseMessageBox } from '.';
import { loginSchema } from '../helpers/schemas';
import { SIGNIN_USER } from '../store/constants';
import { useStore } from '../store/Store';

const LoginForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { dispatch } = useStore();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  // setting up yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(loginSchema),
  });

  const submitLoginForm = async (data) => {
    const { email, password } = data;
    // try login
    try {
      const response = await axios.post('/users/login', { email, password });
      const { success, token } = response.data;
      if (success) {
        // show success message
        setSuccessMessage('Login Successful.');
        // set token to local storage
        localStorage.setItem('x_auth_token', 'Bearer' + ' ' + token);
        // get user data and set to state
        const { user } = jwt_decode(token);
        dispatch({ type: SIGNIN_USER, payload: { user } });

        // if admin send to admin panel otherwise from state.
        if (user.role === 'admin') {
          history.replace('/admin');
        } else {
          history.replace(from);
        }
      }
    } catch (error) {
      // show error message
      setErrorMessage(error.response?.data?.message);
    }
  };

  return (
    <div className="h-min-nav container-area grid place-items-center bg-color">
      <div className="fr-color w-full md:w-2/3 lg:w-1/3 p-3 rounded-md">
        <h1 className="text-green-300 font-montserrat text-2xl font-bold mb-2">Login</h1>
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
        <form className="mt-6" onSubmit={handleSubmit(submitLoginForm)}>
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
              autoComplete="on"
              {...register('email')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.email?.message}</p>
          </div>
          {/* password */}
          <div className="mt-3">
            <label htmlFor="pass" className="block text-green-400 ">
              Password
            </label>
            <input
              type="password"
              id="pass"
              placeholder="Type your password"
              className="bg-color pl-1 w-full py-3 mt-2 text-gray-100"
              autoComplete="on"
              {...register('password')}
            />
            <p className="text-sm text-red-500 mt-1">{errors.password?.message}</p>
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
            <Link to="/forgotPassword" className="text-green-300 hover:underline">
              Forgot Password?
            </Link>
          </span>

          <span className="text-gray-100 block mt-3">
            New Here?{' '}
            <Link to="/signup" className="text-green-300 hover:underline">
              Create Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
