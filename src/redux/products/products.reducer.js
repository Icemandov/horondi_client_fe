import {
  SET_PRODUCT,
  SET_PRODUCTS_LOADING,
  SET_RATE,
  SET_COMMENT,
  SET_UPDATING_COMMENT,
  SET_COMMENTS_LOADING
} from './products.types';

const initialState = {
  product: null,
  products: [],
  loading: true,
  commentsLoading: false,
  updatingComment: false
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
        comments: action.payload
      }
    };
  case SET_COMMENTS_LOADING:
    return {
      ...state,
      commentsLoading: action.payload
    };
  case SET_UPDATING_COMMENT:
    return {
      ...state,
      updatingComment: action.payload
    };
  default:
    return state;
  }
};

export default productsReducer;
