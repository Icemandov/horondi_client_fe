import {
  setCategories,
  getCategories,
  setCategoriesLoading
} from '../categories.actions';
import {
  GET_CATEGORIES,
  SET_CATEGORIES,
  SET_CATEGORIES_LOADING
} from '../categories.types';

describe('Categories actions test', () => {
  it('should set new categories to payload property', () => {
    const newCategories = {
      name: [
        {
          value: 'Рюкзаки',
          lang: 'uk'
        }
      ]
    };
    const result = {
      type: SET_CATEGORIES,
      payload: newCategories
    };

    expect(setCategories(newCategories)).toEqual(result);
  });

  it('should return object with type GET_CATEGORIES', () => {
    const result = {
      type: GET_CATEGORIES
    };

    expect(getCategories()).toEqual(result);
  });

  it('should set categories loading', () => {
    const result = {
      type: SET_CATEGORIES_LOADING,
      payload: false
    };

    expect(setCategoriesLoading(false)).toEqual(result);
  });
});
