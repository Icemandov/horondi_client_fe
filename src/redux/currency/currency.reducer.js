import { CHANGE_CURRENCY } from './currency.types';
import { DEFAULT_CURRENCY } from '../../configs';

export const initialState = {
  currency: DEFAULT_CURRENCY
};

const currencyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case CHANGE_CURRENCY:
    return {
      ...state,
      currency: action.payload
    };
  default:
    return state;
  }
};

export default currencyReducer;
