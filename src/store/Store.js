/*
 *
 * Title: site store to manage state
 * Description: store with context api and useReducer
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */

import jwt_decode from 'jwt-decode';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { LOADING_END, SIGNIN_USER } from './constants';
import { initialState, reducer } from './reducer';

// create store context
const Store = createContext();

// use store
export const useStore = () => useContext(Store);

// store provider
export const StoreProvider = ({ children }) => {
  // userReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let token = localStorage.getItem('x_auth_token');

    // validate jwt and login user on startup
    if (token && token.startsWith('Bearer')) {
      // get main token value
      token = token.split(' ')[1];

      if (jwt_decode(token).exp > Date.now() / 1000) {
        const { user } = jwt_decode(token);
        dispatch({ type: SIGNIN_USER, payload: { user } });
        dispatch({ type: LOADING_END });
      }
    } else {
      localStorage.clear();
    }
  }, []);

  const storeValue = {
    state,
    dispatch,
  };

  return (
    <Store.Provider value={storeValue}>
      {!state.loading ? children : <p>Loading...</p>}
      {/* {children} */}
    </Store.Provider>
  );
};
