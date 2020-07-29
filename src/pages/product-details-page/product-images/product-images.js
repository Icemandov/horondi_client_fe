import React, { useState } from 'react';

import ImgsViewer from 'react-images-viewer';
import useStyles from './product-images.styles';
import * as productImage from '../../../images/pdp_main.jpg';

import { IMGS_VIEWER, imgAltInfo } from '../../../configs';

const ProductImages = ({ images, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const styles = useStyles();
  const imagesSet = Array(4).fill({ src: productImage });

  const openImage = (idx) => {
    setIsOpen(true);
    setCurrImg(idx);
  };

  const primaryImage = images[0].primary ? (
    <img src={productImage} alt={imgAltInfo} onClick={() => openImage(0)} />
  ) : null;

  const sideImages = images[0].additional
    ? images[0].additional.map((image, idx) => (
      <img
        src={productImage}
        key={idx}
        alt={imgAltInfo}
        onClick={() => openImage(idx + 1)}
      />
    ))
    : null;

  return (
    <div>
      <ImgsViewer
        imgs={imagesSet}
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
      <div className={styles.container}>
        <div className={styles.images}>
          {primaryImage}
          {sideImages}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
