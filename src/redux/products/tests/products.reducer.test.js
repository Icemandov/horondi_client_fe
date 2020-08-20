import productsReducer from '../products.reducer';
import {
  setProductsLoading,
  setProduct,
  setCommentsLoading,
  setUpdatingComment,
  setRate,
  setComment
} from '../products.actions';

describe('Products reducer test', () => {
  let initialState; let stateWithProduct;
  beforeEach(() => {
    initialState = {
      product: null,
      loading: true,
      commentsLoading: false,
      updatingComment: null
    };

    stateWithProduct = {
      ...initialState,
      product: {
        id: 'f5498j459g8'
      }
    };
  });

  it('should return default state', () => {
    expect(productsReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with new product', () => {
    const newProduct = {
      data: {
        getProductsById: {
          name: {
            lang: 'en',
            value: 'Rolltop Pink'
          },
          basePrice: 1450
        }
      }
    };
    const state = {
      ...initialState,
      product: newProduct
    };

    expect(productsReducer(initialState, setProduct(newProduct))).toEqual(
      state
    );
  });

  it('should set loading to true', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(productsReducer(initialState, setProductsLoading(false))).toEqual(
      state
    );
  });

  it('should set comments loading to true', () => {
    const state = {
      ...initialState,
      commentsLoading: true
    };

    expect(productsReducer(initialState, setCommentsLoading(true))).toEqual(
      state
    );
  });

  it('should set updating comment to state', () => {
    const commentId = 'fnr89g4g49g85g80';
    const state = {
      ...initialState,
      updatingComment: commentId
    };

    expect(
      productsReducer(initialState, setUpdatingComment(commentId))
    ).toEqual(state);
  });

  it('should set rate to state', () => {
    const payload = {
      userRates: [
        {
          rate: 2
        },
        {
          rate: 5
        }
      ],
      rate: 5
    };
    const state = {
      ...stateWithProduct,
      product: {
        ...stateWithProduct.product,
        rate: payload.rate,
        userRates: payload.userRates
      }
    };

    expect(productsReducer(stateWithProduct, setRate(payload))).toEqual(state);
  });

  it('should set comments to state', () => {
    const payload = [
      {
        text: 'nice'
      },
      {
        text: 'good'
      }
    ];
    const state = {
      ...stateWithProduct,
      product: {
        ...stateWithProduct.product,
        comments: payload
      }
    };

    expect(productsReducer(stateWithProduct, setComment(payload))).toEqual(
      state
    );
  });
});
