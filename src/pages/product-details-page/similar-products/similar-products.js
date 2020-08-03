import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import { IMG_ALT_INFO } from '../../../configs';
import { SIMILAR_ITEMS } from '../../../translations/product-details.translations';
import { getFiltredProducts } from '../../../redux/filter/filter.actions';
import * as productImage from '../../../images/pdp_main.jpg';

const SimilarProducts = ({ language, category, product }) => {
  const categoryId = category._id;
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
        category: categoryId
      })
    );
  }, [dispatch, categoryId]);

  const imgs = products
    .filter(({ _id }) => _id !== product._id)
    .map(({ _id }) => (
      <Link to={`${_id}`} key={_id}>
        <img className='similar-image' src={productImage} alt={IMG_ALT_INFO} />
      </Link>
    ));

  return (
    <div className='similarItems'>
      <div>
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>
      <Carousel className='carousel' responsive={responsive} swipeable={false}>
        {imgs}
      </Carousel>
      <hr />
    </div>
  );
};

export default SimilarProducts;
