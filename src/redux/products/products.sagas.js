import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  setProductsLoading,
  setProduct,
  setRate,
  setComment,
  setCommentsLoading,
  setUpdatingComment
} from './products.actions';
import { setError } from '../error/error.actions';

import {
  GET_PRODUCT,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from './products.types';

import {
  addComment,
  changeRate,
  deleteComment,
  getComments,
  getProduct,
  updateComment
} from './products.operations';

export function* handleProductLoading({ payload }) {
  try {
    yield put(setProductsLoading(true));
    const product = yield call(getProduct, payload);
    yield put(setProduct(product.data.getProductById));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield put(setProductsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleAddComment({ payload }) {
  try {
    if (payload.rate > 0) {
      const rate = yield call(changeRate, payload);
      yield put(setRate(rate.data[payload.method]));
    }

    yield put(setCommentsLoading(true));
    yield call(addComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setCommentsLoading(false));
  } catch (e) {
    yield put(setCommentsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleDeleteComment({ payload }) {
  try {
    yield put(setCommentsLoading(true));
    yield call(deleteComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setCommentsLoading(false));
  } catch (e) {
    yield put(setCommentsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleUpdateComment({ payload }) {
  try {
    yield put(setUpdatingComment(payload.comment));
    yield call(updateComment, payload);
    const comments = yield call(getComments, payload.product);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setUpdatingComment(null));
  } catch (e) {
    yield put(setUpdatingComment(null));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* productsSaga() {
  yield takeEvery(GET_PRODUCT, handleProductLoading);
  yield takeEvery(ADD_COMMENT, handleAddComment);
  yield takeEvery(DELETE_COMMENT, handleDeleteComment);
  yield takeEvery(UPDATE_COMMENT, handleUpdateComment);
}
