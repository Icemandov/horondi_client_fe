import React from 'react';
import parse from 'html-react-parser';

import Rating from '@material-ui/lab/Rating';
import useStyles from './product-info.styles';
import * as colorImage from '../../../images/red.jpg';
import * as patternImage from '../../../images/pattern_2.jpg';

import {
  COLOR,
  PATTERN,
  PATTERNS,
  PRODUCT_PRICE,
  PRODUCT_DESCRIPTION,
  RATE_PRECISION
} from '../../../configs';

const ProductInfo = ({ rate, title, description, currentPrice, language }) => {
  const styles = useStyles({
    colorUrl: colorImage,
    patternUrl: patternImage
  });

  return (
    <div>
      <div className={styles.head}>
        <span className={styles.title}>{title}</span>
        <Rating value={rate} readOnly precision={RATE_PRECISION} />
      </div>
      <div>
        <p>{PRODUCT_DESCRIPTION[language].value}:</p>
        {parse(description)}
      </div>
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
