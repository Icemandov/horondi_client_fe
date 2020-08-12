import {
  GET_BUSINESS_PAGE_BY_CODE,
  SET_LOADING,
  SET_BUSINESS_PAGE
} from './businessPages.types';

const setBusinessPage = (businessPage) => ({
  type: SET_BUSINESS_PAGE,
  payload: {
    businessPage,
    key: businessPage.code
      .split('-')
      .map((val, idx) => (idx ? val[0].toUpperCase() + val.slice(1) : val))
      .join('')
  }
});

const getBusinessPageByCode = (code) => ({
  type: GET_BUSINESS_PAGE_BY_CODE,
  payload: code
});

const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});

export { setBusinessPage, getBusinessPageByCode, setLoading };
