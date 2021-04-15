/*
 *
 * Title: site store to manage state
 * Description: store with context api and useReducer
 * Author: Shah Arafat
 * Date: 07-04-2021
 *
 */

import { createContext, useContext, useEffect, useReducer } from 'react';
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
    // ---
  }, []);

  const storeValue = {
    state,
    dispatch,
  };

  return (
    <Store.Provider value={storeValue}>
      {!state.loading ? children : <p>Loading...</p>}
    </Store.Provider>
  );
};
