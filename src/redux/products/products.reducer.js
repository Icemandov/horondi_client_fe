import {
  SET_PRODUCT,
  SET_PRODUCTS_LOADING,
  SET_RATE,
  SET_COMMENT
} from './products.types';

const initialState = {
  product: null,
  products: [],
  loading: true
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
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
  case SET_RATE:
    return {
      ...state,
      product: {
        ...state.product,
        rate: action.payload.rate,
        userRates: action.payload.userRates
      }
    };
  case SET_COMMENT:
    return {
      ...state,
      product: {
        ...state.product,
        comments: action.payload.comments
      }
    };
  default:
    return state;
  }
};

export default productsReducer;
