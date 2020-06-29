import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './footer-lists.styles';

import {
  URL_LANGUAGE,
  FOOTER_INFORMATION,
  FOOTER_CONTACTS,
  FOOTER_CATALOGS
} from '../../configs';
import { getCategories } from '../../redux/categories/categories.actions';

const FooterLists = ({ getCategories, list, language = 0 }) => {
  const styles = useStyles();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const getCategoryURL = (category) => {
    const [filteredCategory] = category.filter(
      (item) => item.lang === URL_LANGUAGE
    );

    if (filteredCategory.value) {
      return filteredCategory.value.toLowerCase();
    }
  };

  const categoriesList = list.map(({ _id, name }) => (
    <div key={_id}>
      <Typography variant='subtitle2'>
        <Link className={styles.cardLink} to={`/${getCategoryURL(name)}`}>
          {name[language].value}
        </Link>
      </Typography>
    </div>
  ));
  const informationList = FOOTER_INFORMATION[language].items.map((item) => (
    <div key={item.id}>
      <Typography variant='subtitle2'>
        <Link className={styles.cardLink} to={item.url}>
          {item.item}
        </Link>
      </Typography>
    </div>
  ));

  const contactsList = FOOTER_CONTACTS[language].items.map((item) => (
    <div key={item.id}>
      <Typography variant='subtitle2'>
        <a
          className={styles.cardLink}
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {item.item}
        </a>
      </Typography>
    </div>
  ));
  return (
    <div className={styles.cardDeck}>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>
            {' '}
            {FOOTER_CATALOGS[language].title}
          </Typography>
        </div>
        {categoriesList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>
            {' '}
            {FOOTER_INFORMATION[language].title}
          </Typography>
        </div>
        {informationList}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <Typography variant='h5'>
            {' '}
            {FOOTER_CONTACTS[language].title}
          </Typography>
        </div>
        {contactsList}
      </div>
    </div>
  );
};

const mapStateToProps = ({ Categories: { list } }) => ({
  list
});

const mapDispatchToProps = {
  getCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterLists);