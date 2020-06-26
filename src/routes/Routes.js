import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Routes.style.js';
import NewsPage from 'src/pages/news/news-page';
import AppHeader from '../components/app-header';

const Routes = () => (
  <Router>
    <AppHeader />
    <div>
      <Switch>
        <Route path='/news' exact component={NewsPage} />
      </Switch>
    </div>
  </Router>
);

export default Routes;