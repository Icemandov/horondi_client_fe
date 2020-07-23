import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useStyles from './product-sizes.styles';

import { SIZE } from '../../../configs';

const ProductSizes = ({
  productSizes,
  selectedSize,
  handleSizeChange,
  error,
  language
}) => {
  const styles = useStyles();

  const sizes = productSizes
    ? productSizes.map((size) => (
      <Button
        key={size}
        className={size === selectedSize ? styles.selectedSize : null}
        onClick={(e) => handleSizeChange(e)}
      >
        {size}
      </Button>
    ))
    : null;

  return (
    <div className={styles.sizeButtons}>
      <span className={styles.label}>{SIZE[language].size}: </span>
      <ButtonGroup>{sizes}</ButtonGroup>
      <br />
      {error ? (
        <span className={styles.error}>{SIZE[language].error}</span>
      ) : null}
    </div>
  );
};

export default ProductSizes;
