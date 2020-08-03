import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setAllProducts,
  setProductsLoading,
  setProduct
} from './products.actions';
import { setError } from '../error/error.actions';
import getItems from '../../utils/client';
import { GET_ALL_PRODUCTS, GET_PRODUCT } from './products.types';

export function* handleGetAllProducts() {
  try {
    yield put(setProductsLoading(true));
    const products = yield call(
      getItems,
      `query{
        getProducts {
            name {
              lang
              value
            }
            rate
            basePrice
            colors {
              name {
                lang
                value
              }
              simpleName {
                lang
                value
              }
            }
            basePrice
            pattern {
              lang
              value
            }
            rate
            images{
                primary {
                    medium
                }
            }
            category {
              _id
              name {
                value
              }
              isMain
            }
          }
      }`
    );
    yield put(setAllProducts(products.data.getProducts));
    yield put(setProductsLoading(false));
  } catch (e) {
    console.log(e);
    yield call(handleProductsErrors, e);
  }
}

export function* handleProductsErrors(e) {
  yield put(setProductsLoading(false));
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export function* handleProductLoading({ payload }) {
  yield put(setProductsLoading(true));
  const query = `query {
    getProductsById(id:"${payload}") {
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
      text
      date
      user {
        firstName
      }
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
}`;
  try {
    const product = yield call(getItems, query);
    yield put(setProduct(product.data.getProductsById));
    yield put(setProductsLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export default function* productsSaga() {
  yield takeEvery(GET_PRODUCT, handleProductLoading);
  yield takeEvery(GET_ALL_PRODUCTS, handleGetAllProducts);
}
