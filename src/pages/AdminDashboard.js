/*
 *
 * Title: Admin Dashboard
 * Description: Admin Dashboard
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdminPanel } from '.';
import { AddService, AdminDashboardNav, ManageServices, OrderList, UserList } from '../components';

const AdminDashboard = () => {
  return (
    <div>
      <Router>
        <div className="flex">
          <AdminDashboardNav />
          <div className="flex-grow">
            <Switch>
              <Route path="/admin" exact component={AdminPanel} />
              <Route path={`/admin/users`} component={UserList} />
              <Route path={`/admin/orders`} component={OrderList} />
              <Route path={`/admin/addService`} component={AddService} />
              <Route path={`/admin/manageServices`} component={ManageServices} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default AdminDashboard;
