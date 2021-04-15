import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ForgotPassword, Home, Login, ResetPassword, Signup } from './pages';

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
      </Switch>
    </Router>
    // </StoreProvider>
  );
}

export default App;
