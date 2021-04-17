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
  GET_ALL_USERS,
  LOADING_END,
  LOADING_START,
  LOGOUT_USER,
  SIGNIN_USER,
  UPDATE_USER_ROLE,
} from './constants';

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
    case GET_ALL_USERS: {
      return { ...state, users: action.payload.users };
    }
    case UPDATE_USER_ROLE: {
      return { ...state, users: action.payload.users };
    }

    default: {
      return state;
    }
  }
};
