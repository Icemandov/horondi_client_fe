import React from 'react';

import './similar-products.css';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import * as productImage from '../../../images/pdp_main.jpg';

import {
  SIMILAR_ITEMS,
  IMG_ALT_INFO
} from '../../../translations/product-details.translations';
import { responsiveCarousel } from '../../../configs';

const SimilarProducts = ({ language }) => {
  const { title } = SIMILAR_ITEMS[language];

  const imgs = Array(6)
    .fill(productImage)
    .map((img, idx) => (
      <img src={img} alt={IMG_ALT_INFO[language].value} key={idx} />
    ));

  return (
    <div className='similarItems'>
      <div>
        <hr />
        <h2>{title}</h2>
        <hr />
      </div>
      <Carousel
        className='carousel'
        responsive={responsiveCarousel}
        swipeable={false}
      >
        {imgs}
      </Carousel>
      <hr />
    </div>
  );
};

export default SimilarProducts;
