import React from 'react';
import { Select } from '@material-ui/core';
import useStyles from './dropdown.styles';

const Dropdown = ({ mappedItems, handler, defaultValue }) => {
  const styles = useStyles();
  return (
    <div className={styles.rootItem}>
      <Select
        className={styles.rootSelect}
        defaultValue={defaultValue}
        onChange={handler}
      >
        {mappedItems}
      </Select>
    </div>
  );
};

export default Dropdown;
