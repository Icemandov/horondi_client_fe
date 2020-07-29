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

import { DEFAULT_SIZE } from '../../configs';

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

  const {
    _id,
    name,
    basePrice,
    rate,
    images,
    options,
    description,
    comments,
    mainMaterial,
    innerMaterial,
    strapLengthInCm
  } = product;

  const uniqueSizes = new Set(
    options ? options.map(({ size }) => size.name) : null
  );

  const uniqueBottomMaterials = new Set(
    options
      ? options.map(({ bottomMaterial }) => bottomMaterial.name[1].value)
      : null
  );

  const uniqueAdditions = new Set(
    options
      ? options
        .filter(({ additions }) => additions.length > 0)
        .map(({ additions }) => additions[0].name[1].value)
      : null
  );

  const sizes = Array.from(uniqueSizes).map(
    (item) => options.find(({ size }) => item === size.name).size
  );

  const bottomMaterials = Array.from(uniqueBottomMaterials).map(
    (item) =>
      options.find(
        ({ bottomMaterial }) => item === bottomMaterial.name[1].value
      ).bottomMaterial
  );

  const additions = Array.from(uniqueAdditions).map(
    (item) =>
      options
        .filter(({ additions }) => additions.length > 0)
        .find(({ additions }) => item === additions[0].name[1].value)
        .additions[0]
  );

  const [selectedSize, setSize] = useState('');
  const [error, setError] = useState(false);
  const [bagBottom, setBagBottom] = useState('');
  const [sidePocket, setSidePocket] = useState(false);
  const [currentPrice, setPrice] = useState(0);
  const [currentVolume, setVolume] = useState('');
  const [currentWeight, setWeight] = useState('');

  useEffect(() => {
    const productId = match.params.id;
    if (!basePrice) {
      dispatch(getProduct(productId));
    } else {
      const { volumeInLiters, weightInKg } = options.find(
        ({ size }) => size.name === DEFAULT_SIZE
      ).size;
      setPrice(basePrice);
      setVolume(volumeInLiters);
      setWeight(weightInKg);
    }

    window.scrollTo(0, 0);
  }, [match.params.id, dispatch, basePrice, options]);

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
      ? sizes.find(({ name }) => name === selectedSize).additionalPrice
      : 0;
    const { additionalPrice, volumeInLiters, weightInKg } = sizes.find(
      ({ name }) => name === textContent
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
