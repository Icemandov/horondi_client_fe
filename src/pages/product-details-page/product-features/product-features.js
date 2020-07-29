import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './product-features.styles';

import { EMPTY_MENU_ITEM } from '../../../configs';
import {
  ADD_FEATURES,
  SIDE_POCKET,
  BAG_BOTTOM,
  SELECT_NONE
} from '../../../translations/product-details.translations';

const ProductFeatures = ({
  bottomMaterials,
  additions,
  bagBottom,
  setBagBottom,
  sidePocket,
  setSidePocket,
  setPrice,
  language
}) => {
  const { additionalPrice, available } = additions[0];
  const styles = useStyles();

  const setAdditionalPrice = (price) => ` +${price} UAH`;

  const handleBottomChange = (e) => {
    const { value } = e.target;
    const oldPrice = bagBottom
      ? bottomMaterials.find(({ name }) => name[1].value === bagBottom)
        .additionalPrice
      : 0;
    const newPrice = value
      ? bottomMaterials.find(({ name }) => name[1].value === value)
        .additionalPrice
      : 0;

    setPrice((currentPrice) => currentPrice - oldPrice + newPrice);
    setBagBottom(value);
  };

  const handlePocketChange = (e) => {
    if (!sidePocket) {
      setPrice((currentPrice) => currentPrice + additionalPrice);
    } else {
      setPrice((currentPrice) => currentPrice - additionalPrice);
    }
    setSidePocket(e.target.checked);
  };

  const menuItems = bottomMaterials
    ? bottomMaterials.map(({ name, additionalPrice }) => (
      <MenuItem value={name[1].value} key={name[1].value}>
        {name[language].value}
        {additionalPrice ? (
          <span className={styles.selectPrice}>
            {setAdditionalPrice(additionalPrice)}
          </span>
        ) : null}
      </MenuItem>
    ))
    : null;

  return (
    <div>
      <span className={styles.label}>{ADD_FEATURES[language].features}: </span>
      <div className={styles.featuresForm}>
        <div className={styles.feature}>
          <FormControl className={styles.formControl}>
            <InputLabel>{BAG_BOTTOM[language].bagBottom}</InputLabel>
            <Select value={bagBottom} onChange={handleBottomChange}>
              <MenuItem value={EMPTY_MENU_ITEM.value} key={EMPTY_MENU_ITEM.key}>
                {SELECT_NONE[language].none}
              </MenuItem>
              {menuItems}
            </Select>
          </FormControl>
        </div>
        {available ? (
          <div className={styles.checkbox}>
            <FormControlLabel
              control={
                <Checkbox checked={sidePocket} onChange={handlePocketChange} />
              }
              label={SIDE_POCKET[language].sidePocket}
            />
            <span className={styles.price}>
              {setAdditionalPrice(additionalPrice)}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductFeatures;
