import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '@material-ui/core';
import { useStyles } from './product-details-page.styles';

import Feedback from './feedback';
import SimilarProducts from './similar-products';
import ProductSizes from './product-sizes';
import ProductSubmit from './product-submit';
import ProductFeatures from './product-features/product-features';
import ProductInfo from './product-info';
import ProductImages from './product-images';
import { PDP_IMAGES } from '../../configs';

const ProductDetails = () => {
  const { language } = useSelector(({ Language }) => ({
    language: Language.language
  }));

  const title = 'Rolltop "Pumpkin"';
  const productPattern = 'pattern_1';
  const productColor = 'yellow_1';
  const productSizes = ['S', 'M', 'L'];
  const defaultPrice = 1350;
  const images = [
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

  const styles = useStyles();

  const [selectedSize, setSize] = useState(false);
  const [error, setError] = useState(false);
  const [bagBottom, setBagBottom] = useState('');
  const [sidePocket, setSidePocket] = useState(false);
  const [currentPrice, setPrice] = useState(defaultPrice);

  const checkSize = () => {
    if (selectedSize) return;
    setError(true);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.textContent);
    if (error) {
      setError(false);
    }
  };

  return (
    <Card className={styles.container}>
      <div className={styles.product}>
        <ProductImages images={images} language={language} />
        <div className={styles.productDetails}>
          <ProductInfo
            title={title}
            currentPrice={currentPrice}
            language={language}
            productPattern={productPattern}
            productColor={productColor}
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
          <ProductSubmit checkSize={checkSize} language={language} />
        </div>
      </div>
      <SimilarProducts language={language} />
      <Feedback language={language} />
    </Card>
  );
};

export default ProductDetails;
