import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from '../pages/news/news-page';
import Login from '../pages/Login';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/news' exact component={NewsPage} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact render={() => 'register page'} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
