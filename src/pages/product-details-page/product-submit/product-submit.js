import React, { useState } from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import useStyles from './product-submit.styles';

import { PDP_BUTTONS } from '../../../configs';

const ProductSubmit = ({ checkSize, language }) => {
  const styles = useStyles();

  const [isWishful, setWishful] = useState(false);

  return (
    <div className={styles.submit}>
      <FavoriteIcon
        className={isWishful ? styles.redHeart : styles.heart}
        onClick={() => setWishful((isWishful) => !isWishful)}
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
