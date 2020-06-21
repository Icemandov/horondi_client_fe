import cartActionTypes from './cart.types';

const addToCart = (value) => ({
  type: cartActionTypes.TEST_ACTION,
  payload: value
});
export { addToCart };
