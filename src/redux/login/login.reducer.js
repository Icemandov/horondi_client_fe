import SET_USER, { USER_LOGGED, USER_LOADING } from './login.types';

const initialState = {
  loggedIn: false,
  userLoading: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER: {
    return {
      ...state,
      user: action.payload
    };
  }
  case USER_LOGGED: {
    return {
      ...state,
      loggedIn: action.payload,
      userLoading: false
    };
  }
  case USER_LOADING: {
    return {
      ...state,
      userLoading: true
    };
  }
  default: {
    return state;
  }
  }
};

export default loginReducer;
