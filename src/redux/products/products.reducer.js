import {
  SET_PRODUCT,
  SET_ALL_PRODUCTS,
  SET_PRODUCTS_LOADING
} from './products.types';

const initialState = {
  product: {},
  products: [],
  loading: true
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_ALL_PRODUCTS:
    return {
      ...state,
      products: action.payload
    };
  case SET_PRODUCT:
    return {
      ...state,
      product: action.payload
    };
  case SET_PRODUCTS_LOADING:
    return {
      ...state,
      loading: action.payload
    };
  default:
    return state;
  }
};

export default productsReducer;
