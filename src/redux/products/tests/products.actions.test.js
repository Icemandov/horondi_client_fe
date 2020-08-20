import {
  setProductsLoading,
  setProduct,
  getProduct,
  setRate,
  addComment,
  updateComment,
  deleteComment,
  setComment,
  setUpdatingComment,
  setCommentsLoading
} from '../products.actions';

import {
  SET_PRODUCT,
  SET_PRODUCTS_LOADING,
  GET_PRODUCT,
  SET_RATE,
  SET_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  SET_COMMENTS_LOADING
} from '../products.types';

describe('Products actions test', () => {
  it('should set new product to payload property', () => {
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
    const result = {
      type: SET_PRODUCT,
      payload: newProduct
    };

    expect(setProduct(newProduct)).toEqual(result);
  });

  it('should return object with type GET_PRODUCT and product id', () => {
    const productId = 'c3a84a5b9866c30390366168';
    const result = {
      type: GET_PRODUCT,
      payload: productId
    };

    expect(getProduct(productId)).toEqual(result);
  });

  it('should set product loading', () => {
    const result = {
      type: SET_PRODUCTS_LOADING,
      payload: true
    };

    expect(setProductsLoading(true)).toEqual(result);
  });

  it('should set rate to payload', () => {
    const newRate = {
      data: {
        addRate: {
          rate: 5
        }
      }
    };
    const result = {
      type: SET_RATE,
      payload: newRate
    };

    expect(setRate(newRate)).toEqual(result);
  });

  it('should set comment to payload', () => {
    const newComment = {
      data: {
        addComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: SET_COMMENT,
      payload: newComment
    };

    expect(setComment(newComment)).toEqual(result);
  });

  it('should set comment to add to payload', () => {
    const commentToAdd = {
      data: {
        addComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: ADD_COMMENT,
      payload: commentToAdd
    };

    expect(addComment(commentToAdd)).toEqual(result);
  });

  it('should set comment to delete to payload', () => {
    const commentToDelete = {
      data: {
        deleteComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: DELETE_COMMENT,
      payload: commentToDelete
    };

    expect(deleteComment(commentToDelete)).toEqual(result);
  });

  it('should set comment to delete to payload', () => {
    const commentToUpdate = {
      data: {
        updateComment: {
          comment: 'nice'
        }
      }
    };

    const result = {
      type: UPDATE_COMMENT,
      payload: commentToUpdate
    };

    expect(updateComment(commentToUpdate)).toEqual(result);
  });

  it('should set comments loading', () => {
    const result = {
      type: SET_COMMENTS_LOADING,
      payload: true
    };

    expect(setCommentsLoading(true)).toEqual(result);
  });

  it('should set updating comment', () => {
    const commentId = '859238jfj3n4fybu5';

    const result = {
      type: SET_COMMENTS_LOADING,
      payload: commentId
    };

    expect(setCommentsLoading(commentId)).toEqual(result);
  });
});
