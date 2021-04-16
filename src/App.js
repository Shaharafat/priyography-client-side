import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  AdminDashboard,
  CustomerDashboard,
  ForgotPassword,
  Home,
  Login,
  ResetPassword,
  Signup,
} from './pages';
function App() {
  return (
    // <StoreProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/dashboard" component={CustomerDashboard} />
      </Switch>
    </Router>
    // </StoreProvider>
  );
}

export default App;
