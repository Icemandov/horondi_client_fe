import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '@material-ui/core';
import { useStyles } from './product-details-page.styles';

import Feedback from './feedback';
import SimilarProducts from './similar-products';
import ProductSizes from './product-sizes';
import ProductSubmit from './product-submit';
import ProductFeatures from './product-features/product-features';
import ProductInfo from './product-info';
import ProductImages from './product-images';
import CircularUnderLoad from '../../components/loading-bar';
import { getProduct } from '../../redux/products/products.actions';

import { PRODUCT_OPTIONS, DEFAULT_SIZE } from '../../configs';

const ProductDetails = ({ match }) => {
  const { language, product, isLoading } = useSelector(
    ({ Language, Products }) => ({
      language: Language.language,
      product: Products.product,
      isLoading: Products.loading
    })
  );
  const dispatch = useDispatch();
  const styles = useStyles();

  const { sizes } = PRODUCT_OPTIONS;
  const { bottomMaterials, additions } = PRODUCT_OPTIONS;
  const { volumeInLiters, weightInKg } = sizes.find(
    ({ size }) => size === DEFAULT_SIZE
  );
  const {
    _id,
    name,
    basePrice,
    rate,
    images,
    description,
    comments,
    mainMaterial,
    innerMaterial,
    strapLengthInCm
  } = product;

  const [selectedSize, setSize] = useState('');
  const [error, setError] = useState(false);
  const [bagBottom, setBagBottom] = useState('');
  const [sidePocket, setSidePocket] = useState(false);
  const [currentPrice, setPrice] = useState(0);
  const [currentVolume, setVolume] = useState(volumeInLiters);
  const [currentWeight, setWeight] = useState(weightInKg);

  useEffect(() => {
    const productId = match.params.id;
    if (!basePrice) {
      dispatch(getProduct(productId));
    } else {
      setPrice(basePrice);
    }

    window.scrollTo(0, 0);
  }, [match.params.id, dispatch, basePrice]);

  const productToSend = {
    _id,
    name,
    images,
    selectedSize,
    bagBottom,
    sidePocket,
    totalPrice: currentPrice,
    quantity: 1
  };

  const checkSize = () => {
    if (!selectedSize) {
      setError(true);
      return false;
    }
    return true;
  };

  const handleSizeChange = (e) => {
    const { textContent } = e.target;
    const oldPrice = selectedSize
      ? sizes.find(({ size }) => size === selectedSize).additionalPrice
      : 0;
    const { additionalPrice, volumeInLiters, weightInKg } = sizes.find(
      ({ size }) => size === textContent
    );

    setSize(textContent);
    setPrice((price) => price - oldPrice + additionalPrice);
    setVolume(volumeInLiters);
    setWeight(weightInKg);

    if (error) {
      setError(false);
    }
  };

  if (isLoading && !product.basePrice) {
    return (
      <div className={styles.center}>
        <CircularUnderLoad />
      </div>
    );
  }

  return (
    <Card className={styles.container}>
      <div className={styles.product}>
        <ProductImages images={images} language={language} />
        <div className={styles.productDetails}>
          <ProductInfo
            rate={rate}
            title={name}
            description={description}
            currentPrice={currentPrice}
            mainMaterial={mainMaterial}
            innerMaterial={innerMaterial}
            strapLengthInCm={strapLengthInCm}
            currentVolume={currentVolume}
            currentWeight={currentWeight}
            language={language}
          />
          <ProductSizes
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
            sizes={sizes}
            language={language}
            error={error}
          />
          <ProductFeatures
            bottomMaterials={bottomMaterials}
            additions={additions}
            bagBottom={bagBottom}
            setBagBottom={setBagBottom}
            sidePocket={sidePocket}
            setSidePocket={setSidePocket}
            setPrice={setPrice}
            language={language}
          />
          <ProductSubmit
            checkSize={checkSize}
            language={language}
            product={product}
            productToSend={productToSend}
          />
        </div>
      </div>
      <SimilarProducts language={language} />
      <Feedback language={language} comments={comments} />
    </Card>
  );
};

export default ProductDetails;
