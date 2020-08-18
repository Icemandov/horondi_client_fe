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
import getItems, { setItems } from '../../utils/client';
import {
  GET_PRODUCT,
  CHANGE_RATE,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT
} from './products.types';

export function* handleProductLoading({ payload }) {
  yield put(setProductsLoading(true));
  const query = `
  query {
    getProductById(id:"${payload}") {
    ... on Product {
      _id
    category {
      _id
      name {
        lang
        value
      }
    }
    name {
      lang
      value
    }
    description {
      lang
      value
    }
    mainMaterial {
      lang
      value
    }
    innerMaterial {
      lang
      value
    }
    strapLengthInCm
    images {
      primary {
        medium
        large
      }
      additional {
        thumbnail
        large
      }
    }
    colors {
      code
      name {
        lang
        value
      }
      images {
        thumbnail
        large
      }
      available
    }
    pattern {
      lang
      value
    }
    closure {
      lang
      value
    }
    basePrice 
    options {
      size {
        name
        heightInCm
        widthInCm
        depthInCm
        volumeInLiters
        available
        additionalPrice 
      }
      bottomMaterial {
        name {
          lang
          value
        }
        additionalPrice 
      }
      additions {
        name {
          lang
          value
        }
        available
        additionalPrice 
      }
    }
    rate
    comments {
      _id
      text
      date
    }
    options {
      size {
        name
        volumeInLiters
        widthInCm
        weightInKg
      }
      bottomMaterial {
        name {
          lang
          value
        }
    	available
        additionalPrice 
      }
      additions {
        name {
          value
          lang
        }
        available
        additionalPrice 
      }
      availableCount
    }
    images {
      primary {
        large
        medium
      }
      additional {
        large
        medium
      }
    }
    }
  }
}`;
  try {
    const product = yield call(getItems, query);
    yield put(setProduct(product.data.getProductById));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield put(setProductsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleRateChanging({ payload }) {
  const mutation = `
  mutation($product: ID!, $user: ID!, $rate: Int) {
    ${payload.method}(product: $product, userRate: {user: $user,rate: $rate}) {
      rate
      userRates {
        user {
          _id
        }
      }
    }
  }
  `;
  const variables = {
    product: payload.product,
    user: payload.user,
    rate: payload.rate
  };
  try {
    const rate = yield call(setItems, mutation, variables);
    yield put(setRate(rate.data[payload.method]));
  } catch (e) {
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleAddComment({ payload }) {
  const mutation = `
  mutation (
  $product: ID!, 
  $email: String!, 
  $name: String, 
  $show: Boolean!,
  $text: String ) {
    addComment(
    productId: $product, 
    comment: {
      text: $text,
      show: $show
      user: {
        email: $email
        name: $name
      },
      product: $product
    }) {
      ... on Comment {
        text
        date
      }
    }
  }
  `;
  const variables = {
    product: payload.product,
    text: payload.text,
    email: payload.email,
    show: payload.show,
    name: payload.firstName
  };
  try {
    yield put(setCommentsLoading(true));
    yield call(setItems, mutation, variables);
    const query = `
      query {
        getAllCommentsByProduct(productId: "${payload.product}") {
          ... on Comment {
            _id
            text
            date
          }
        }
      }
    `;
    const comments = yield call(getItems, query);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setCommentsLoading(false));
  } catch (e) {
    yield put(setCommentsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleDeleteComment({ payload }) {
  const mutation = `
  mutation ($id: ID!) {
    deleteComment(id: $id) {
      ... on Comment {
        _id
        text
        date
      }
    }
  }
  `;
  const variables = {
    id: payload.comment
  };
  try {
    yield put(setCommentsLoading(true));
    yield call(setItems, mutation, variables);
    const query = `
      query {
        getAllCommentsByProduct(productId: "${payload.product}") {
          ... on Comment {
            _id
            text
            date
          }
        }
      }
    `;
    const comments = yield call(getItems, query);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setCommentsLoading(false));
  } catch (e) {
    yield put(setCommentsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export function* handleUpdateComment({ payload }) {
  const mutation = `
  mutation (
  $id: ID!,
  $product: ID!, 
  $email: String!, 
  $show: Boolean!,
  $text: String ) {
    updateComment(
    id: $id, 
    comment: {
      text: $text,
      show: $show
      user: {
        email: $email
      },
      product: $product
    }) {
      ... on Comment {
        _id
        text
        date
      }
    }
  }
  `;
  const variables = {
    id: payload.comment,
    product: payload.product,
    text: payload.text,
    email: payload.email,
    show: payload.show
  };
  try {
    yield put(setUpdatingComment(true));
    yield call(setItems, mutation, variables);
    const query = `
      query {
        getAllCommentsByProduct(productId: "${payload.product}") {
          ... on Comment {
            _id
            text
            date
          }
        }
      }
    `;
    const comments = yield call(getItems, query);
    yield put(setComment(comments.data.getAllCommentsByProduct));
    yield put(setUpdatingComment(false));
  } catch (e) {
    yield put(setUpdatingComment(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* productsSaga() {
  yield takeEvery(GET_PRODUCT, handleProductLoading);
  yield takeEvery(CHANGE_RATE, handleRateChanging);
  yield takeEvery(ADD_COMMENT, handleAddComment);
  yield takeEvery(DELETE_COMMENT, handleDeleteComment);
  yield takeEvery(UPDATE_COMMENT, handleUpdateComment);
}
