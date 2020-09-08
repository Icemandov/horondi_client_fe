import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setUser,
  setUserError,
  setUserLoading,
  resetState,
  userHasRecovered,
  userHasRegistered,
  setUserIsChecked,
  setPasswordIsReset,
  setConfirmationEmailStatus
} from './user.actions';
import {
  LOGIN_USER,
  CONFIRM_USER,
  RECOVER_USER,
  PASSWORD_RESET,
  CHECK_IF_TOKEN_VALID,
  REGISTER_USER,
  PRESERVE_USER,
  UPDATE_USER,
  SEND_CONFIRMATION_EMAIL
} from './user.types';
import getItems, { setItems } from '../../utils/client';
import { REDIRECT_TIMEOUT } from '../../configs/index';
import { setToLocalStorage } from '../../services/local-storage.service';

export const loginUser = (data) => {
  const query = ` 
  mutation login($user: LoginInput!){
  loginUser(
    loginInput: $user
  ) {
    purchasedProducts
    orders
    token
    _id
    email
    firstName
    lastName
    phoneNumber
    confirmed
    images {
      thumbnail
    }
    address {
      country
      city
      street
      buildingNumber
      appartment
      region
      zipcode
    }
  }
}
  `;
  return setItems(query, data);
};

export const resetPassword = (data) => {
  const query = ` 
  mutation reset($password: String!, $token: String!){
    resetPassword(password: $password, token: $token)
  }
  `;
  return setItems(query, data);
};

export function* handleUserLoad({ payload }) {
  try {
    yield put(setUserLoading(true));
    const user = yield call(loginUser, payload);
    yield put(setUser(user.data.loginUser));
    yield setToLocalStorage('accessToken', user.data.loginUser.token);
    yield put(setUserLoading(false));
    yield put(push('/'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserConfirm({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const user = yield call(
      setItems,
      ` 
  mutation confirmUser($token: String!){
    confirmUser(token: $token) {
      purchasedProducts
        orders
        _id
        email
        firstName
        lastName
        phoneNumber
        confirmed
        images {
          thumbnail
        }
        address {
          country
          city
          street
          buildingNumber
          appartment
          region
          zipcode
        }
        confirmed
    }
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(setUser(user.data.confirmUser));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserRecovery({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      ` 
  mutation recovery($email: String!, $language: Int!){
    recoverUser(email: $email, language: $language)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(userHasRecovered(true));
    if (payload.redirect) {
      yield delay(REDIRECT_TIMEOUT);
      yield put(push('/login'));
    }
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handlePasswordReset({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      ` 
  mutation reset($password: String!, $token: String!){
    resetPassword(password: $password, token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(setPasswordIsReset(true));
    yield delay(REDIRECT_TIMEOUT);
    yield put(push('/login'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleTokenCheck({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      ` 
  mutation checkToken($token: String!){
    checkIfTokenIsValid(token: $token)
  }
  `,
      payload
    );
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  }
}

export function* handleUserRegister({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    yield call(
      setItems,
      `
      mutation register($user: userRegisterInput!, $language: Int!){
        registerUser(
          user: $user
          language: $language
        ) {
          email
        }
        }
      `,
      payload
    );
    yield put(setUserLoading(false));
    yield put(userHasRegistered(true));
    yield delay(REDIRECT_TIMEOUT);
    yield put(push('/login'));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
  }
}

export function* handleUserPreserve() {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const user = yield call(
      getItems,
      `query {
      getUserByToken {
        ... on User {
        purchasedProducts
        orders
        _id
        email
        firstName
        lastName
        phoneNumber
        images {
          thumbnail
        }
        address {
          country
          city
          street
          buildingNumber
          appartment
          zipcode
          region
        }
        confirmed
        }
        ... on Error {
          statusCode
          message
        }
      }
    }`
    );
    yield put(setUser(user.data.getUserByToken));
    if (!user.data.getUserByToken) {
      yield setToLocalStorage('accessToken', null);
    }
  } catch (error) {
    yield setToLocalStorage('accessToken', null);
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  } finally {
    yield put(setUserIsChecked(true));
    yield put(setUserLoading(false));
  }
}

export function* handleUpdateUser({ payload }) {
  try {
    yield put(resetState());
    yield put(setUserLoading(true));
    const user = yield call(
      setItems,
      `
     mutation updateUser($user: UserInput!, $id: ID!){
      updateUserById(user: $user, id: $id) {
        purchasedProducts
        orders
        _id
        email
        firstName
        lastName
        phoneNumber
        confirmed
        images {
          thumbnail
        }
        address {
          country
          city
          street
          buildingNumber
          appartment
          region
          zipcode
        }
        confirmed
      }
    }
  `,
      payload
    );
    yield put(setUser(user.data.updateUserById));
    yield put(setUserLoading(false));
  } catch (error) {
    yield put(setUserError(error.message.replace('GraphQL error: ', '')));
    yield put(push('/error-page'));
  }
}

export function* handleSendConfirmation({ payload }) {
  try {
    yield put(resetState());
    yield call(
      setItems,
      `
     mutation sendConfirmation($email: String!, $language: Int!){
      sendConfirmationLetter(email: $email, language: $language)
    }
  `,
      payload
    );
    yield put(setConfirmationEmailStatus(true));
  } catch (e) {
    yield put(setUserError(e.message.replace('GraphQL error: ', '')));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_USER, handleUserLoad);
  yield takeEvery(CONFIRM_USER, handleUserConfirm);
  yield takeEvery(RECOVER_USER, handleUserRecovery);
  yield takeEvery(PASSWORD_RESET, handlePasswordReset);
  yield takeEvery(CHECK_IF_TOKEN_VALID, handleTokenCheck);
  yield takeEvery(REGISTER_USER, handleUserRegister);
  yield takeEvery(PRESERVE_USER, handleUserPreserve);
  yield takeEvery(UPDATE_USER, handleUpdateUser);
  yield takeEvery(SEND_CONFIRMATION_EMAIL, handleSendConfirmation);
}
