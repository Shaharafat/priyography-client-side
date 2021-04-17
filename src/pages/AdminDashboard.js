/*
 *
 * Title: Admin Dashboard
 * Description: Admin Dashboard
 * Author: Shah Arafat
 * Date: 16-04-2021
 *
 */
import React from 'react';
import { Switch } from 'react-router-dom';
import { AdminPanel } from '.';
import { AddService, AdminDashboardNav, ManageServices, OrderList, UserList } from '../components';
import AdminRoute from '../routes/AdminRoute';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminDashboardNav />
      <div className="flex-grow">
        <Switch>
          <AdminRoute path="/admin" exact component={AdminPanel} />
          <AdminRoute path="/admin/users" component={UserList} />
          <AdminRoute path="/admin/orders" component={OrderList} />
          <AdminRoute path="/admin/addService" component={AddService} />
          <AdminRoute path="/admin/manageServices" component={ManageServices} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminDashboard;
