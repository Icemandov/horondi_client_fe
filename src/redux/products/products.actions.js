import {
  SET_PRODUCT,
  GET_PRODUCT,
  SET_PRODUCTS_LOADING,
  SET_RATE,
  CHANGE_RATE,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  SET_COMMENT,
  SET_COMMENTS_LOADING,
  SET_UPDATING_COMMENT
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

const addComment = (payload) => ({
  type: ADD_COMMENT,
  payload
});

const updateComment = (payload) => ({
  type: UPDATE_COMMENT,
  payload
});

const deleteComment = (payload) => ({
  type: DELETE_COMMENT,
  payload
});

const setComment = (payload) => ({
  type: SET_COMMENT,
  payload
});

const setCommentsLoading = (payload) => ({
  type: SET_COMMENTS_LOADING,
  payload
});

const setUpdatingComment = (payload) => ({
  type: SET_UPDATING_COMMENT,
  payload
});

export {
  setProduct,
  getProduct,
  setProductsLoading,
  setRate,
  changeRate,
  addComment,
  deleteComment,
  updateComment,
  setComment,
  setCommentsLoading,
  setUpdatingComment
};
