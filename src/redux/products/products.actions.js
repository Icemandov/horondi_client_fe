import {
  SET_PRODUCT,
  GET_PRODUCT,
  SET_PRODUCTS_LOADING
} from './products.types';

const setProduct = (item) => ({
  type: SET_PRODUCT,
  payload: item
});

const getProduct = () => ({
  type: GET_PRODUCT
});

const setProductsLoading = (loading) => ({
  type: SET_PRODUCTS_LOADING,
  payload: loading
});

export { setProduct, getProduct, setProductsLoading };
