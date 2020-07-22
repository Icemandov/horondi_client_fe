import React, { useState } from 'react';
import { Card } from '@material-ui/core';
import ImgsViewer from 'react-images-viewer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStyles } from './product-details-page.styles';
import {
  PDP_IMAGES,
  PDP_BUTTONS,
  COLOR,
  IMGS_VIEWER,
  COLORS,
  PATTERNS,
  SIZE,
  PATTERN,
  ADD_FEATURES
} from '../../configs';
import Feedback from './feedback';
import SimilarProducts from './similar-products';

const ProductDetails = () => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  const colorLabel = COLOR[language].color;
  const cartButtonLabel = PDP_BUTTONS[language].cartButton;
  const buyButtonLabel = PDP_BUTTONS[language].buyButton;
  const prevLabel = IMGS_VIEWER[language].prev;
  const nextLabel = IMGS_VIEWER[language].next;
  const closeLabel = IMGS_VIEWER[language].close;
  const {sizeError} = SIZE[language];
  const sizeLabel = SIZE[language].size;
  const patternLabel = PATTERN[language].pattern;
  const featuresLabel = ADD_FEATURES[language].features;

  const title = 'Rolltop "Pumpkin"';
  const productPattern = 'pattern_1';
  const productColor = 'yellow_1';
  const productSizes = ['S', 'M', 'L'];
  const price = null;
  const priceWithSale = '1350.00 UAH';
  const imgs = [
    {
      src: PDP_IMAGES.main
    },
    {
      src: PDP_IMAGES.main
    },
    {
      src: PDP_IMAGES.main
    },
    {
      src: PDP_IMAGES.main
    }
  ];

  const styles = useStyles({
    colorUrl: COLORS[productColor],
    patternUrl: PATTERNS[productPattern]
  });

  const openImage = (idx) => {
    setIsOpen(true);
    setCurrImg(idx);
  };

  const checkSize = () => {
    if (selectedSize) return;
    setError(true);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.textContent);
    if (error === true) {
      setError(false);
    }
  };

  const [selectedSize, setSize] = useState(false);
  const [isWishful, setWishful] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  const [error, setError] = useState(false);
  const [bagBottom, setBagBottom] = useState('');
  const [sidePocket, setSidePocket] = useState(false);

  const handleBottomChange = (e) => {
    setBagBottom(e.target.value);
  };

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
    <Card className={styles.container}>
      <div className={styles.product}>
        <ImgsViewer
          imgs={imgs}
          currImg={currImg}
          showThumbnails
          isOpen={isOpen}
          onClickPrev={() => setCurrImg(currImg - 1)}
          onClickNext={() => setCurrImg(currImg + 1)}
          onClickThumbnail={(index) => setCurrImg(index)}
          onClose={() => setIsOpen(false)}
          closeBtnTitle={closeLabel}
          leftArrowTitle={prevLabel}
          rightArrowTitle={nextLabel}
        />
        <div className={styles.images}>
          <img
            src={`${PDP_IMAGES.main}`}
            alt='bag'
            onClick={() => openImage(0)}
          />
          <img
            src={`${PDP_IMAGES.main}`}
            alt='bag'
            onClick={() => openImage(1)}
          />
          <img
            src={`${PDP_IMAGES.main}`}
            alt='bag'
            onClick={() => openImage(2)}
          />
          <img
            src={`${PDP_IMAGES.main}`}
            alt='bag'
            onClick={() => openImage(3)}
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.head}>
            <span className={styles.title}>{title}</span>
            <Rating value={5} readOnly />
          </div>
          <p className={styles.description}>
            Textured hoodie featuring an adjustable drawstring hood, long
            sleeves with elastic cuffs, welt hip pockets and ribbed hem.
          </p>
          <div>
            <span className={styles.promotionalPrice}>{priceWithSale}</span>
            <span className={styles.defaultPrice}>{price}</span>
          </div>
          <div className={styles.look}>
            <span className={styles.label}>{colorLabel}:</span>
            <br />
            <div className={styles.colorCircle} />
            <span className={styles.label}>{patternLabel}:</span>
            <div className={styles.patternCircle} />
            <br />
          </div>
          <div className={styles.buttons}>
            <span className={styles.label}>{sizeLabel}: </span>
            <ButtonGroup aria-label='outlined primary button group'>
              {sizes}
            </ButtonGroup>{' '}
            <br />
            {error ? <span className={styles.error}>{sizeError}</span> : null}
          </div>
          <div>
            <span className={styles.label}>{featuresLabel}: </span>
            <div className={styles.additionalForm}>
              <div className={styles.feature}>
                <FormControl className={styles.formControl}>
                  <InputLabel id='demo-simple-select-autowidth-label'>
                    Bag bottom
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-autowidth-label'
                    id='demo-simple-select-autowidth'
                    value={bagBottom}
                    onChange={handleBottomChange}
                  >
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value='leatherette'>Leatherette</MenuItem>
                    <MenuItem value='cordura'>Cordura</MenuItem>
                    <MenuItem value='skin'>Skin</MenuItem>
                  </Select>
                </FormControl>
                <span className={styles.promotionalPrice}>+350 UAH</span>
              </div>
              <div className={styles.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sidePocket}
                      onChange={(e) => setSidePocket(e.target.checked)}
                      name='sidePocketChecked'
                    />
                  }
                  label='Side pocket'
                />
                <span className={styles.promotionalPrice}>+100 UAH</span>
              </div>
            </div>
          </div>
          <div className={styles.submit}>
            <FavoriteIcon
              className={isWishful ? styles.redHeart : styles.heart}
              onClick={() => setWishful(!isWishful)}
            />
            <Button className={styles.pdpButton} onClick={checkSize}>
              {cartButtonLabel}
            </Button>
            <Button className={styles.pdpButton} onClick={checkSize}>
              {buyButtonLabel}
            </Button>
          </div>
        </div>
      </div>
      <SimilarProducts language={language} />
      <Feedback language={language} />
    </Card>
  );
};

export default ProductDetails;
