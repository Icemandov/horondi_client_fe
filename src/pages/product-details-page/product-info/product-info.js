import React from 'react';
import parse from 'html-react-parser';

import Rating from '@material-ui/lab/Rating';
import useStyles from './product-info.styles';
import * as colorImage from '../../../images/red.jpg';
import * as patternImage from '../../../images/pattern_2.jpg';

import {
  COLOR,
  PATTERN,
  PRODUCT_PRICE,
  PRODUCT_DESCRIPTION,
  RATE_PRECISION,
  WEIGHT
} from '../../../configs';

const ProductInfo = ({
  rate,
  title,
  description,
  currentPrice,
  mainMaterial,
  innerMaterial,
  strapLengthInCm,
  currentVolume,
  currentWeight,
  language
}) => {
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
      <div className={styles.details}>
        <div>
          <p className={styles.subtitle}>
            {PRODUCT_DESCRIPTION[language].productDescription}:
          </p>
          <div className={styles.description}>{parse(description)}</div>
        </div>
        <div>
          <span className={styles.subtitle}>
            {PRODUCT_DESCRIPTION[language].productMainMaterial}
          </span>
          <span className={styles.description}>
            - {mainMaterial[language].value}
          </span>
        </div>
        <div>
          <span className={styles.subtitle}>
            {PRODUCT_DESCRIPTION[language].productInnerMaterial}
          </span>
          <span className={styles.description}>
            - {innerMaterial[language].value}
          </span>
        </div>
        <div>
          <span className={styles.subtitle}>
            {PRODUCT_DESCRIPTION[language].strapLengthInCm}
          </span>
          <span className={styles.description}>- {strapLengthInCm}</span>
        </div>
        <div>
          <span className={styles.subtitle}>
            {WEIGHT[language].volumeLabel}
          </span>
          <span className={styles.description}>- {currentVolume}</span>
        </div>
        <div>
          <span className={styles.subtitle}>
            {WEIGHT[language].weightLabel}
          </span>
          <span className={styles.description}>- {currentWeight}</span>
        </div>
      </div>
      <br />
      <div>
        <span className={styles.subtitle}>
          {PRODUCT_PRICE[language].price}:{' '}
        </span>
        <span className={styles.price}>{currentPrice} UAH</span>
      </div>
      <div className={styles.look}>
        <span className={styles.subtitle}>{COLOR[language].color}:</span>
        <br />
        <div className={styles.colorCircle} />
        <span className={styles.subtitle}>{PATTERN[language].pattern}:</span>
        <div className={styles.patternCircle} />
        <br />
      </div>
    </div>
  );
};

export default ProductInfo;
