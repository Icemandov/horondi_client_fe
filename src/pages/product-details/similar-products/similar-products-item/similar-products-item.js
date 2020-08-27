import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './similar-products-item.styles';

const SimilarProductItem = ({ imageUrl, id }) => {
  const styles = useStyles({ image: imageUrl });

  return (
    <Link to={`/product/${id}`}>
      <div className={styles.similarItem} />
    </Link>
  );
};

export default SimilarProductItem;
