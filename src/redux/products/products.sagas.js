import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setProductsLoading, setProduct } from './products.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_PRODUCT } from './products.types';

export function* handleProductLoading({ payload }) {
  yield put(setProductsLoading(true));
  const query = `query {
    getProductsById(id:"${payload}") {
    _id
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
      simpleName
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
    }
    rate
    comments {
      text
      date
      user {
        firstName
      }
    }
  }
}`;
  try {
    const product = yield call(getItems, query);
    console.log(product.data.getProductsById);
    yield put(setProduct(product.data.getProductsById));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield put(setProductsLoading(false));
    yield put(setError({ e }));
    yield put(push('/error-page'));
  }
}

export default function* productsSaga() {
  yield takeEvery(GET_PRODUCT, handleProductLoading);
}
