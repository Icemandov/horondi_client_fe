import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '@material-ui/core';
import { useStyles } from './product-details-page.styles';

import Comments from './comments';
import SimilarProducts from './similar-products';
import ProductSizes from './product-sizes';
import ProductSubmit from './product-submit';
import ProductFeatures from './product-features/product-features';
import ProductInfo from './product-info';
import ProductImages from './product-images';
import { Loader } from '../../components/loader/loader';
import {
  getFiltredProducts,
  getProduct,
  setCategoryFilter
} from '../../redux/products/products.actions';

import { DEFAULT_SIZE } from '../../configs';

const ProductDetails = ({ match }) => {
  const { id } = match.params;
  const { product, isLoading, productUrl, categoryFilter } = useSelector(
    ({ Products, router }) => ({
      categoryFilter: Products.filters.categoryFilter,
      product: Products.product,
      isLoading: Products.productLoading,
      productUrl: router.location.pathname
    })
  );
  const dispatch = useDispatch();
  const styles = useStyles();

  const [selectedSize, setSize] = useState('');
  const [error, setError] = useState(false);
  const [bagBottom, setBagBottom] = useState('');
  const [sidePocket, setSidePocket] = useState(false);
  const [currentPrice, setPrice] = useState(0);
  const [dimensions, setDimensions] = useState({});

  const { _id, name, basePrice, images, options, category } = product || {};

  const { volumeInLiters, weightInKg } = useMemo(
    () =>
      product && options[0].size.name
        ? options.find(({ size: { name } }) => name === DEFAULT_SIZE).size
        : {},
    [product, options]
  );

  useEffect(() => {
    dispatch(getProduct(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      dispatch(setCategoryFilter([category._id]));
      setPrice(basePrice[0].value / 100);
      setDimensions({ volumeInLiters, weightInKg });
    }

    return () => {
      setBagBottom('');
      setPrice(0);
      setSize('');
      setSidePocket(false);
      setError(false);
    };
  }, [basePrice, volumeInLiters, weightInKg, product, category, dispatch]);

  useEffect(() => {
    if (categoryFilter) {
      dispatch(getFiltredProducts({}));
    }
  }, [dispatch, categoryFilter]);

  const uniqueSizes = useMemo(
    () => [
      ...new Set(
        options
          ? options.map(({ size: { available, name } }) => available && name)
          : null
      )
    ],
    [options]
  );

  const uniqueBottomMaterials = useMemo(
    () => [
      ...new Set(
        options
          ? options.map(({ bottomMaterial: item }) =>
            item && item.available ? item.name[1].value : null
          )
          : null
      )
    ],
    [options]
  );

  const uniqueAdditions = useMemo(
    () => [
      ...new Set(
        options
          ? options
            .filter(({ additions }) => additions.length > 0)
            .map(
              ({ additions: [{ available, name }] }) =>
                available && name[1].value
            )
          : null
      )
    ],
    [options]
  );

  const sizes = useMemo(
    () =>
      uniqueSizes.map(
        (item) => options.find(({ size: { name } }) => item === name).size
      ),
    [uniqueSizes, options]
  );

  const bottomMaterials = useMemo(
    () =>
      uniqueBottomMaterials[0]
        ? uniqueBottomMaterials.map(
          (item) =>
            options.find(
              ({ bottomMaterial: { name } }) => item === name[1].value
            ).bottomMaterial
        )
        : null,
    [uniqueBottomMaterials, options]
  );

  const additions = useMemo(
    () =>
      uniqueAdditions.map(
        (item) =>
          options
            .filter(({ additions }) => additions.length > 0)
            .find(({ additions: [{ name }] }) => item === name[1].value)
            .additions[0]
      ),
    [uniqueAdditions, options]
  );

  const bottomNameToSend = useMemo(
    () =>
      bottomMaterials
        ? bottomMaterials.find(({ name }) => name[1].value === bagBottom)
        : null,
    [bagBottom, bottomMaterials]
  );

  const additionsNameToSend = useMemo(
    () => (additions.length >= 1 ? additions[0].name : null),
    [additions]
  );

  const productToSend = {
    _id,
    name,
    images,
    selectedSize,
    bagBottom: bottomNameToSend,
    sidePocket: {
      isSelected: sidePocket,
      name: additionsNameToSend
    },
    totalPrice: currentPrice,
    quantity: 1,
    productUrl
  };

  const checkSize = () => {
    if (sizes[0].name && !selectedSize) {
      setError(true);
      return false;
    }
    return true;
  };

  const handleSizeChange = (event) => {
    const { textContent } = event.target;

    const oldPrice = selectedSize
      ? sizes.find(({ name }) => name === selectedSize).additionalPrice[0]
        .value / 100
      : 0;

    const { additionalPrice, volumeInLiters, weightInKg } = sizes.find(
      ({ name }) => name === textContent
    );

    setSize(textContent);
    setPrice((price) => price - oldPrice + additionalPrice[0].value / 100);
    setDimensions({ volumeInLiters, weightInKg });

    if (error) {
      setError(false);
    }
  };

  if (isLoading || !product) {
    return (
      <div className={styles.center}>
        <Loader />
      </div>
    );
  }

  return (
    <Card className={styles.container}>
      <div className={styles.product}>
        <ProductImages />
        <div className={styles.productDetails}>
          <ProductInfo
            currentPrice={currentPrice}
            currentVolume={dimensions.volumeInLiters}
            currentWeight={dimensions.weightInKg}
          />
          <ProductSizes
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
            sizes={sizes}
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
          />
          <ProductSubmit checkSize={checkSize} productToSend={productToSend} />
        </div>
      </div>
      <SimilarProducts />
      <Comments />
    </Card>
  );
};

export default ProductDetails;
