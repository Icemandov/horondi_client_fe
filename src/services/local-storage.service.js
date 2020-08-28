import { DEFAULT_CURRENCY, DEFAULT_LANGUAGE } from '../configs';

export const clearLocalStorage = () => {
  const horondi = {
    accessToken: 'not null',
    _id: null,
    wishlist: [],
    language: DEFAULT_LANGUAGE,
    currency: DEFAULT_CURRENCY,
    cart: [],
    theme: 'light'
  };
  localStorage.setItem('horondi', JSON.stringify(horondi));
};

if (!localStorage.getItem('horondi')) {
  clearLocalStorage();
}

export const getFromLocalStorage = (name) => {
  const localObject = JSON.parse(localStorage.getItem('horondi'));
  return localObject[name];
};

export const setToLocalStorage = (name, item) => {
  const localObject = JSON.parse(localStorage.getItem('horondi'));
  localObject[name] = item;
  localStorage.setItem('horondi', JSON.stringify(localObject));
};
