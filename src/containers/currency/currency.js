import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import {
  setToLocalStorage,
  getFromLocalStorage
} from '../../services/local-storage.service';
import { changeCurrency } from '../../redux/currency/currency.actions';
import { CURRENCIES_LIST } from '../../translations/currency.translation';
import Dropdown from '../../components/dropdown';

const currencyInLocalStorage = getFromLocalStorage('currency') || 0;

const Currency = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const targetValue = e.target.value;
    if (targetValue !== undefined) {
      setToLocalStorage('currency', targetValue);
      dispatch(changeCurrency(targetValue));
    }
  };
  const mappedCurrencies = CURRENCIES_LIST.map(({ currency, value }) => (
    <MenuItem id={`currency${value + 1}`} key={value} value={value}>
      {currency === 'UAH' ? (
        <FontAwesomeIcon icon={faHryvnia} />
      ) : (
        <FontAwesomeIcon icon={faDollarSign} />
      )}
    </MenuItem>
  ));
  return (
    <Dropdown
      mappedItems={mappedCurrencies}
      handler={handleChange}
      defaultValue={currencyInLocalStorage}
    />
  );
};

export default Currency;
