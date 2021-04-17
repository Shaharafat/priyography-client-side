/*
 *
 * Title: Cusromer Dashboard
 * Description: Customer Dashboard
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import React from 'react';
import { Switch } from 'react-router-dom';
import { Dashboard, Orders, WriteReview } from '.';
import { CustomerDashboardNav } from '../components';
import PrivateRoute from '../routes/PrivateRoute';

const CustomerDashboard = () => {
  return (
    <div className="flex">
      <CustomerDashboardNav />
      <div className="flex-grow">
        <Switch>
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path={`/dashboard/orders`} component={Orders} />
          <PrivateRoute path={`/dashboard/writeReview`} component={WriteReview} />
        </Switch>
      </div>
    </div>
  );
};

export default CustomerDashboard;
