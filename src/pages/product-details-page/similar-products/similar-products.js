import React from 'react';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import * as productImage from '../../../images/pdp_main.jpg';

import { SIMILAR_ITEMS } from '../../../configs';

const SimilarProducts = ({ language }) => {
  const { title } = SIMILAR_ITEMS[language];
  const carouselLabel = 'carousel';
  const similarItemsLabel = 'similarItems';
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

  return (
    <div className={similarItemsLabel}>
      <div>
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>
      <Carousel
        className={carouselLabel}
        responsive={responsive}
        swipeable={false}
      >
        <img src={productImage} alt='bag' />
        <img src={productImage} alt='bag' />
        <img src={productImage} alt='bag' />
        <img src={productImage} alt='bag' />
        <img src={productImage} alt='bag' />
      </Carousel>
      <hr />
    </div>
  );
};

export default SimilarProducts;
