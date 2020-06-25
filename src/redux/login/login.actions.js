import { SET_USER, USER_LOADING, USER_LOGGED } from './login.types';

export const setUser = (payload) => ({
  type: SET_USER,
  payload
});
export const userLogged = (payload) => ({
  type: USER_LOGGED,
  payload
});
export const userLoading = (payload) => ({
  type: USER_LOADING,
  payload
});
