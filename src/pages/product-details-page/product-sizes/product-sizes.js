import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useStyles from './product-sizes.styles';

import { SIZE } from '../../../translations/product-details.translations';

const ProductSizes = ({
  selectedSize,
  handleSizeChange,
  sizes,
  error,
  language
}) => {
  const styles = useStyles();

  const sizeButtons = sizes
    ? sizes.map(({ size, available }) =>
      available ? (
        <Button
          key={size}
          className={
            size === selectedSize ? styles.selectedSize : styles.sizeButton
          }
          onClick={(e) => handleSizeChange(e)}
        >
          {size}
        </Button>
      ) : null
    )
    : null;

  return (
    <div className={styles.sizeButtons}>
      <span className={styles.label}>{SIZE[language].size}: </span>
      <ButtonGroup>{sizeButtons}</ButtonGroup>
      <br />
      {error ? (
        <span className={styles.error}>{SIZE[language].error}</span>
      ) : null}
    </div>
  );
};

export default ProductSizes;
