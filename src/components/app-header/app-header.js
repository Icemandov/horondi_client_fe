import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStyles } from './app-header.styles';
import Language from '../../containers/language';
import NavbarLeft from '../../containers/navbar-left';
import Cabinet from '../../containers/cabinet';

const AppHeader = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position='static' className={styles.header}>
        <Toolbar>
          <IconButton className={styles.menuButton}>
            <MenuIcon />
          </IconButton>
          <div className={styles.title}>
            <NavbarLeft />
          </div>
          <AttachMoneyIcon />
          <Language />
          <ShoppingBasketIcon />
          <Cabinet />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
