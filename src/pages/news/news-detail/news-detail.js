import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import './news-detail.style.css';
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardMedia,
  Backdrop
} from '@material-ui/core';
import { getArticle } from '../../../redux/news/news.actions';
import { useStyles } from './news-detail.style';
import LoadingBar from '../../../components/loading-bar';
import { TIME_OPTIONS } from '../../../configs';

const NewsDetailPage = ({ match }) => {
  const { article, loading, language } = useSelector(({ News, Language }) => ({
    article: News.activeArticle,
    loading: News.loading,
    language: Language.language
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const articleId = match.params.id;
    dispatch(getArticle(articleId));
    window.scrollTo(0, 0);
  }, [match.params.id, dispatch, article]);

  const styles = useStyles();
  if (loading || !article) {
    return (
      <Backdrop className={styles.backdrop} open={loading} invisible>
        <LoadingBar color='inherit' />
      </Backdrop>
    );
  }
  const currentLanguage = language === 1 ? 'en' : 'uk';
  if (article.lang !== currentLanguage) {
    return <h3>This article is not supported at current language</h3>;
  }
  const newsTitle = article.title ? article.title : 'No title provided';
  const newsDateLanguageOptions = ['ukr-UA', 'en-US'];
  const dateLanguage = newsDateLanguageOptions[language];
  const dateToShow = new Date(parseInt(article.date));
  const newsDate = dateToShow.toLocaleString(dateLanguage, TIME_OPTIONS);
  const newsImage = article.images ? article.images.primary.medium : ' ';
  const newsText = article.text ? parse(article.text) : 'No text provided';
  const newsAuthor = article.author.name
    ? article.author.name
    : 'No author provided';
  const newsAuthorAvatar = article.author.image
    ? article.author.image.small
    : 'No author provided';

  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography
          className={styles.ArticleTitle}
          gutterBottom
          variant='h2'
          component='h2'
        >
          {newsTitle}
        </Typography>
        <CardHeader subheader={newsDate} />
        <hr />
        <div className={styles.imagesContainer}>
          <CardMedia
            className={styles.media}
            image={newsImage}
            title={newsTitle}
            alt={newsTitle}
            component='div'
          />
        </div>
        <Typography
          variant='body2'
          color='textSecondary'
          component='div'
          className={styles.newsText}
          id='fullText'
        >
          {newsText}
        </Typography>
        {/* <iframe
          className={newsVideo ? 'disp-block' : 'disp-none'}
          title={newsTitle}
          width='100%'
          height='600'
          src={newsVideo}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        /> */}
        <hr />
        <div className={styles.newsAuthorFooter}>
          <CardHeader subheader={newsAuthor} id='newsAuthor' />
          <CardMedia
            className={styles.authorAvatar}
            image={newsAuthorAvatar}
            title={newsTitle}
            component='div'
            id='newsAuthorAvatar'
          />
        </div>
      </CardContent>
    </Card>
  );
};

NewsDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default NewsDetailPage;
