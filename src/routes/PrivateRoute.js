/*
 *
 * Title: private route
 * Description: private route. check user authorized or not
 * Author: Shah Arafat
 * Date: 15-04-2021
 *
 */
import React from 'react';
import { Redirect, Route } from 'react-router';
import { useStore } from '../store/Store';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useStore();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
