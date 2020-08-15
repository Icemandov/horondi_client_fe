import {
  SET_PRODUCT,
  GET_PRODUCT,
  SET_PRODUCTS_LOADING,
  SET_RATE,
  CHANGE_RATE
} from './products.types';

const setProduct = (item) => ({
  type: SET_PRODUCT,
  payload: item
});

const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id
});

const setProductsLoading = (loading) => ({
  type: SET_PRODUCTS_LOADING,
  payload: loading
});

const setRate = (rate) => ({
  type: SET_RATE,
  payload: rate
});

const changeRate = (payload) => ({
  type: CHANGE_RATE,
  payload
});

export { setProduct, getProduct, setProductsLoading, setRate, changeRate };
