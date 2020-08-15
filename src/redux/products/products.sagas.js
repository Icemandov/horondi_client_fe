import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setProductsLoading, setProduct, setRate } from './products.actions';
import { setError } from '../error/error.actions';
import getItems, { setItems } from '../../utils/client';
import { GET_PRODUCT, CHANGE_RATE } from './products.types';

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
    basePrice {
      value
      currency
    }
    options {
      size {
        name
        heightInCm
        widthInCm
        depthInCm
        volumeInLiters
        available
        additionalPrice {
          value
          currency
        }
      }
      bottomMaterial {
        name {
          lang
          value
        }
        additionalPrice {
          value
          currency
        }
      }
      additions {
        name {
          lang
    			value
        }
        available
        additionalPrice {
          value
          currency
        }
      }
    }
    rate
    userRates {
      user {
        _id
      }
    }
    comments {
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
        additionalPrice {
          value
          currency
        }
      }
      additions {
        name {
          value
          lang
        }
        available
        additionalPrice {
          value
          currency
        }
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

export default function* productsSaga() {
  yield takeEvery(GET_PRODUCT, handleProductLoading);
  yield takeEvery(CHANGE_RATE, handleRateChanging);
}
