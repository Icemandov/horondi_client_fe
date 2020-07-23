import React, { useState } from 'react';

import ImgsViewer from 'react-images-viewer';
import useStyles from './product-images.styles';

import { IMGS_VIEWER, PDP_IMAGES } from '../../../configs';

const ProductImages = ({ images, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const styles = useStyles();

  const openImage = (idx) => {
    setIsOpen(true);
    setCurrImg(idx);
  };

  return (
    <div>
      <ImgsViewer
        imgs={images}
        currImg={currImg}
        showThumbnails
        isOpen={isOpen}
        onClickPrev={() => setCurrImg((currImg) => currImg - 1)}
        onClickNext={() => setCurrImg((currImg) => currImg + 1)}
        onClickThumbnail={(index) => setCurrImg(index)}
        onClose={() => setIsOpen(false)}
        closeBtnTitle={IMGS_VIEWER[language].close}
        leftArrowTitle={IMGS_VIEWER[language].prev}
        rightArrowTitle={IMGS_VIEWER[language].next}
      />
      <div className={styles.images}>
        <img
          src={`${PDP_IMAGES.main}`}
          alt='bag'
          onClick={() => openImage(0)}
        />
        <img
          src={`${PDP_IMAGES.main}`}
          alt='bag'
          onClick={() => openImage(1)}
        />
        <img
          src={`${PDP_IMAGES.main}`}
          alt='bag'
          onClick={() => openImage(2)}
        />
        <img
          src={`${PDP_IMAGES.main}`}
          alt='bag'
          onClick={() => openImage(3)}
        />
      </div>
    </div>
  );
};

export default ProductImages;
