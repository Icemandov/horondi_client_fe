import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import cartReducer from '../redux/cart/cart-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ cartReducer }),
  composeEnhancers(applyMiddleware())
);

export default store;
