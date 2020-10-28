import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import SliderHomePage from './slider-home-page';
import CategoriesList from './categories-list';
import OurLooks from './our-looks';
import { HOME_BUTTONS } from '../../translations/homepage.translations';
import { useStyles } from './home.styles';

const Home = () => {
  const language = useSelector(({ Language }) => Language.language);
  const styles = useStyles();

  return (
    <div className={styles.home} data-cy='home-page'>
      <SliderHomePage />
      <Link to='/news'>
        <Button className={styles.headerButton} variant='contained'>
          {HOME_BUTTONS[language].NEWS}
        </Button>
      </Link>
      <Link to='/about-us'>
        <Button className={styles.headerButton} variant='contained'>
          {HOME_BUTTONS[language].ABOUT_US}
        </Button>
      </Link>
      <CategoriesList />
      <OurLooks />
    </div>
  );
};

export default Home;
