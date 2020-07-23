import React from 'react';

import Rating from '@material-ui/lab/Rating';
import useStyles from './product-info.styles';

import {
  COLOR,
  COLORS,
  PATTERN,
  PATTERNS,
  PRODUCT_PRICE
} from '../../../configs';

const ProductInfo = ({
  title,
  currentPrice,
  language,
  productColor,
  productPattern
}) => {
  const styles = useStyles({
    colorUrl: COLORS[productColor],
    patternUrl: PATTERNS[productPattern]
  });

  return (
    <div>
      <div className={styles.head}>
        <span className={styles.title}>{title}</span>
        <Rating value={5} readOnly />
      </div>
      <p className={styles.description}>
        Textured hoodie featuring an adjustable drawstring hood, long sleeves
        with elastic cuffs, welt hip pockets and ribbed hem.
      </p>
      <div>
        <span className={styles.label}>{PRODUCT_PRICE[language].price}: </span>
        <span className={styles.price}>{currentPrice} UAH</span>
      </div>
      <div className={styles.look}>
        <span className={styles.label}>{COLOR[language].color}:</span>
        <br />
        <div className={styles.colorCircle} />
        <span className={styles.label}>{PATTERN[language].pattern}:</span>
        <div className={styles.patternCircle} />
        <br />
      </div>
    </div>
  );
};

export default ProductInfo;
