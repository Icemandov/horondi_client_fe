import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import useStyles from './product-submit.styles';

import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../../services/local-storage.service';

import {
  setItemToWishlist,
  removeItemFromWishlist
} from '../../../redux/wishlist/wishlist.actions';

import { PDP_BUTTONS } from '../../../configs';

const ProductSubmit = ({ checkSize, language }) => {
  const product = {
    id: '13'
  };

  const wishlistItems = useSelector(({ Wishlist }) => Wishlist.list);
  const styles = useStyles();
  const dispatch = useDispatch();

  const isWishful = wishlistItems
    ? wishlistItems.find((item) => product.id === item.id)
    : false;

  const onWishfulHandler = () => {
    const localStorageWishlist = getFromLocalStorage('wishlist');
    if (isWishful) {
      dispatch(removeItemFromWishlist(product));
      const filteredItems = localStorageWishlist.filter(
        (item) => item.id !== product.id
      );
      setToLocalStorage('wishlist', filteredItems);
    } else {
      dispatch(setItemToWishlist(product));
      setToLocalStorage('wishlist', [...localStorageWishlist, product]);
    }
  };

  return (
    <div className={styles.submit}>
      <FavoriteIcon
        className={isWishful ? styles.redHeart : styles.heart}
        onClick={onWishfulHandler}
      />
      <Button className={styles.submitButton} onClick={checkSize}>
        {PDP_BUTTONS[language].cartButton}
      </Button>
      <Button className={styles.submitButton} onClick={checkSize}>
        {PDP_BUTTONS[language].buyButton}
      </Button>
    </div>
  );
};

export default ProductSubmit;
