import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './product-features.styles';

import {
  ADD_FEATURES,
  SIDE_POCKET,
  BAG_BOTTOM,
  SELECT_NONE
} from '../../../configs';

const ProductFeatures = ({
  bagBottom,
  setBagBottom,
  sidePocket,
  setSidePocket,
  language,
  setPrice
}) => {
  const bagBottomPrice = 350;
  const sidePocketPrice = 100;
  const styles = useStyles();

  const handlePriceChange = (value, featureType, featurePrice, setFeature) => {
    if (!featureType) {
      setPrice((currentPrice) => currentPrice + featurePrice);
    } else if (!value) {
      setPrice((currentPrice) => currentPrice - featurePrice);
    }
    setFeature(value);
  };

  return (
    <div>
      <span className={styles.label}>{ADD_FEATURES[language].features}: </span>
      <div className={styles.additionalForm}>
        <div className={styles.feature}>
          <FormControl className={styles.formControl}>
            <InputLabel>{BAG_BOTTOM[language].bagBottom}</InputLabel>
            <Select
              value={bagBottom}
              onChange={(e) =>
                handlePriceChange(
                  e.target.value,
                  bagBottom,
                  bagBottomPrice,
                  setBagBottom
                )
              }
            >
              <MenuItem value=''>{SELECT_NONE[language].none}</MenuItem>
              <MenuItem value='leatherette'>Leatherette</MenuItem>
              <MenuItem value='cordura'>Cordura</MenuItem>
              <MenuItem value='skin'>Skin</MenuItem>
            </Select>
          </FormControl>
          <span className={styles.price}>+{bagBottomPrice} UAH</span>
        </div>
        <div className={styles.checkbox}>
          <FormControlLabel
            control={
              <Checkbox
                checked={sidePocket}
                onChange={(e) =>
                  handlePriceChange(
                    e.target.checked,
                    sidePocket,
                    sidePocketPrice,
                    setSidePocket
                  )
                }
              />
            }
            label={SIDE_POCKET[language].sidePocket}
          />
          <span className={styles.price}>+100 UAH</span>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
