import cartActionTypes from './cart.types';

const initialState = { cart: '' };
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case cartActionTypes.TEST_ACTION: {
    return {
      ...state,
      cart: 'test cart'
    };
  }
  default:
    return state;
  }
};
export default cartReducer;
