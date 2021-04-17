/*
 *
 * Title: reducer and initial state for store
 * Description: reducer and initialstate
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */
// dependencies
import {
  ADD_SINGLE_REVIEW,
  ADD_SINGLE_SERVICE,
  DELETE_SINGLE_SERVICE,
  GET_ALL_ORDERS,
  GET_ALL_REVIEWS,
  GET_ALL_SERVICES,
  GET_ALL_USERS,
  GET_USERS_ORDERS,
  LOADING_END,
  LOADING_START,
  LOGOUT_USER,
  SIGNIN_USER,
  UPDATE_ORDER_STATUS,
  UPDATE_USER_ROLE
} from './constants';

// initial states
export const initialState = {
  loading: true,
  user: null,
  orders: [],
  users: [],
  services: [],
  reviews: [],
  usersOrders: []
};

// reducer function. this will be passed in useReducer.
export const reducer = (state, action) => {
  switch (action.type) {
    case LOADING_START: {
      return { ...state, loading: true };
    }
    case LOADING_END: {
      return { ...state, loading: false };
    }
    case SIGNIN_USER: {
      return { ...state, user: action.payload.user };
    }
    case LOGOUT_USER: {
      return { ...state, user: null };
    }
    case GET_ALL_USERS: {
      return { ...state, users: action.payload.users };
    }
    case UPDATE_USER_ROLE: {
      return { ...state, users: action.payload.users };
    }
    case GET_ALL_ORDERS: {
      return { ...state, orders: action.payload.orders };
    }
    case UPDATE_ORDER_STATUS: {
      return { ...state, orders: action.payload.orders };
    }
    case GET_ALL_SERVICES: {
      return { ...state, services: action.payload.services };
    }
    case DELETE_SINGLE_SERVICE: {
      return { ...state, services: action.payload.services };
    }
    case ADD_SINGLE_SERVICE: {
      return { ...state, services: action.payload.services };
    }
    case ADD_SINGLE_REVIEW: {
      return { ...state, reviews: action.payload.reviews };
    }
    case GET_ALL_REVIEWS: {
      return { ...state, reviews: action.payload.reviews };
    }
    case GET_USERS_ORDERS: {
      return { ...state, usersOrders: action.payload.orders };
    }
    default: {
      return state;
    }
  }
};
