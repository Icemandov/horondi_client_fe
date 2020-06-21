import React from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import store from '../../store/store';

import Test from '../test/index';
// import Routes from '../routes';
const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`,
  headers: ['Content-Type: application/json', 'x-auth: Bearer']
});

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <div className='App'>
        {/* <Routes /> */}
        <p>horondi</p>
        <ScrollUpButton ToggledStyle={{ left: 30, bottom: 200 }} />
        <Test />
      </div>
    </ApolloProvider>
  </Provider>
);

export default App;
