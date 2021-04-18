/*
 *
 * Title: Admin Route
 * Description: Admin Route protected for admin
 * Author: Shah Arafat
 * Date: 17-04-2021
 *
 */
import React from 'react';
import { Redirect, Route } from 'react-router';
import { useStore } from '../store/Store';

const AdminRoute = ({ component: Component, ...rest }) => {
  const { state } = useStore();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.user?.role === 'admin' ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default AdminRoute;
