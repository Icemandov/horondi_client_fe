import {
  SET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS,
  SET_PRODUCT,
  GET_PRODUCT,
  SET_PRODUCTS_LOADING
} from './products.types';

export const setAllProducts = (payload) => ({
  type: SET_ALL_PRODUCTS,
  payload
});
export const getAllProducts = () => ({
  type: GET_ALL_PRODUCTS
});

export const setProduct = (item) => ({
  type: SET_PRODUCT,
  payload: item
});

export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id
});

export const setProductsLoading = (loading) => ({
  type: SET_PRODUCTS_LOADING,
  payload: loading
});
