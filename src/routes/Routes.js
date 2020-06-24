import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/login' exact component={Login} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
