import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router';
import useStyles from './product-submit.styles';

import {
  getFromLocalStorage,
  setToLocalStorage
} from '../../../services/local-storage.service';

import {
  setItemToWishlist,
  removeItemFromWishlist
} from '../../../redux/wishlist/wishlist.actions';

import { setItemToCart } from '../../../redux/cart/cart.actions';
import { PDP_BUTTONS } from '../../../configs';

const ProductSubmit = ({ checkSize, language, productToSend, product }) => {
  const { wishlistItems, cartItems } = useSelector(({ Wishlist, Cart }) => ({
    wishlistItems: Wishlist.list,
    cartItems: Cart.list
  }));
  const styles = useStyles();
  const dispatch = useDispatch();

  const isWishful = wishlistItems
    ? wishlistItems.find((item) => product.id === item.id)
    : false;

  const onWishfulHandler = () => {
    const localStorageWishlist = getFromLocalStorage('wishlist');
    if (isWishful) {
      dispatch(removeItemFromWishlist(product.id));
      const filteredItems = localStorageWishlist.filter(
        (item) => item.id !== product.id
      );
      setToLocalStorage('wishlist', filteredItems);
    } else {
      dispatch(setItemToWishlist(product));
      setToLocalStorage('wishlist', [...localStorageWishlist, product]);
    }
  };

  const onAddToCart = () => {
    const isChecked = checkSize();
    if (isChecked) {
      dispatch(setItemToCart(productToSend));
      setToLocalStorage('cart', [...cartItems, productToSend]);
    }
  };

  const onAddToCheckout = () => {
    const isChecked = checkSize();
    if (isChecked) {
      dispatch(setItemToCart(productToSend));
      setToLocalStorage('cart', [...cartItems, productToSend]);
      dispatch(push('/checkout'));
    }
  };

  return (
    <div className={styles.submit}>
      <FavoriteIcon
        className={isWishful ? styles.redHeart : styles.heart}
        onClick={onWishfulHandler}
      />
      <Button className={styles.submitButton} onClick={onAddToCart}>
        {PDP_BUTTONS[language].cartButton}
      </Button>
      <Button className={styles.submitButton} onClick={onAddToCheckout}>
        {PDP_BUTTONS[language].buyButton}
      </Button>
    </div>
  );
};

export default ProductSubmit;
