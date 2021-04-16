/*
 *
 * Title: Cusromer Dashboard
 * Description: Customer Dashboard
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Orders, WriteReview } from '.';
import { CustomerDashboardNav } from '../components';

const CustomerDashboard = () => {
  return (
    <div>
      <Router>
        <div className="flex">
          <CustomerDashboardNav />
          <div className="flex-grow">
            <Switch>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path={`/dashboard/orders`} component={Orders} />
              <Route path={`/dashboard/writeReview`} component={WriteReview} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default CustomerDashboard;
