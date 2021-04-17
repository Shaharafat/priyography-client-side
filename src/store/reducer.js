/*
 *
 * Title: reducer and initial state for store
 * Description: reducer and initialstate
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */
// dependencies
import { LOADING_END, LOADING_START, LOGOUT_USER, SIGNIN_USER } from './constants';

// initial states
export const initialState = {
  loading: true,
  user: null,
  orders: [],
  users: [],
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
    default: {
      return state;
    }
  }
};
