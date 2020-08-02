import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import {
  IMG_ALT_INFO,
  SIMILAR_ITEMS_LABEL,
  CAROUSEL_LABEL
} from '../../../configs';
import { SIMILAR_ITEMS } from '../../../translations/product-details.translations';
import { getFiltredProducts } from '../../../redux/filter/filter.actions';
import * as productImage from '../../../images/pdp_main.jpg';

const SimilarProducts = ({ language, category, product }) => {
  const { title } = SIMILAR_ITEMS[language];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1146, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 810, min: 0 },
      items: 1
    }
  };
  const dispatch = useDispatch();
  const { products } = useSelector(({ Filter }) => ({
    products: Filter.products
  }));

  useEffect(() => {
    dispatch(
      getFiltredProducts({
        category: category._id
      })
    );
  }, [dispatch, category._id]);

  const imgs = products
    .filter(({ _id }) => _id !== product._id)
    .map((product) => (
      <Link to={`${product._id}`} key={product._id}>
        <img className='similar-image' src={productImage} alt={IMG_ALT_INFO} />
      </Link>
    ));

  return (
    <div className={SIMILAR_ITEMS_LABEL}>
      <div>
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>
      <Carousel
        className={CAROUSEL_LABEL}
        responsive={responsive}
        swipeable={false}
      >
        {imgs}
      </Carousel>
      <hr />
    </div>
  );
};

export default SimilarProducts;
