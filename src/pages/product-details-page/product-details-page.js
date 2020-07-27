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

const ProductDetails = ({ match }) => {
  const productPattern = 'pattern_1';
  const productSizes = ['S', 'M', 'L'];

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
    description,
    colors,
    comments
  } = product;

  const [selectedSize, setSize] = useState(false);
  const [error, setError] = useState(false);
  const [bagBottom, setBagBottom] = useState('');
  const [sidePocket, setSidePocket] = useState(false);
  const [currentPrice, setPrice] = useState('');

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
    totalPrice: currentPrice
  };

  const checkSize = () => {
    if (!selectedSize) {
      setError(true);
      return false;
    }
    return true;
  };

  const handleSizeChange = (e) => {
    setSize(e.target.textContent);
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
            title={name[language].value}
            description={description[language].value}
            currentPrice={currentPrice}
            language={language}
          />
          <ProductSizes
            productSizes={productSizes}
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
            language={language}
            error={error}
          />
          <ProductFeatures
            bagBottom={bagBottom}
            setBagBottom={setBagBottom}
            sidePocket={sidePocket}
            setSidePocket={setSidePocket}
            language={language}
            setPrice={setPrice}
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
