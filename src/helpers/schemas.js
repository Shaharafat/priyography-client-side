/*
 *
 * Title: form schemas
 * Description: form schemas here
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */

import * as yup from 'yup';

// schema for data validation
export const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required')
});

// schema for register
export const signupSchema = yup.object().shape({
  firstName: yup.string().min(3).max(50).required(),
  lastName: yup.string().min(3).max(50).required(),
  username: yup.string().min(3).max(50).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'Must contain at least 1 uppercase, 1 lowercase and 1 digit and 8 is the minimum length'
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required()
});

// schema for forgot password
export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email().required()
});

// schema for reset password
export const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'Must contain at least 1 uppercase, 1 lowercase and 1 digit and 8 is the minimum length'
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required()
});

// schema for add service form
export const addServiceFormSchema = yup.object().shape({
  name: yup.string().min(5).max(50).required(),
  price: yup.number().min(5, 'Minimum price is 5$').required('Price is required'),
  serviceDetails: yup.string().required('Must type a feature')
});

// schema for review form
export const writeReviewFormSchema = yup.object().shape({
  reviewText: yup.string().min(20).max(120).required(),
  stars: yup.number().min(1).max(5).required()
});
