import React from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import Routes from '../../routes';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Routes />
    <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
  </Provider>
);

export default App;
