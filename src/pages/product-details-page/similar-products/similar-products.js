import React from 'react';
import Carousel from 'react-multi-carousel';
import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import { PDP_IMAGES , SIMILAR_ITEMS } from '../../../configs';

const SimilarProducts = ({ products, language }) => {
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
  const {title} = SIMILAR_ITEMS[language];

  return (
    <div className='similarItems'>
      <div>
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>
      <Carousel className='carousel' responsive={responsive} swipeable={false}>
        <img src={`${PDP_IMAGES.main}`} alt='bag' />
        <img src={`${PDP_IMAGES.main}`} alt='bag' />
        <img src={`${PDP_IMAGES.main}`} alt='bag' />
        <img src={`${PDP_IMAGES.main}`} alt='bag' />
        <img src={`${PDP_IMAGES.main}`} alt='bag' />
      </Carousel>
      <hr />
    </div>
  );
};

export default SimilarProducts;
