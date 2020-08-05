import React, { useState } from 'react';

import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './feedback.styles';

import FeedbackItem from './feedback-item';

import { INPUT_VARIANT } from '../../../configs';
import { FEEDBACK } from '../../../translations/product-details.translations';

const Feedback = ({ language, comments }) => {
  const styles = useStyles();

  const [rate, setRate] = useState(0);

  const feedbacks = comments
    ? comments.map(({ text, date, user: { firstName } }) => (
      <FeedbackItem
        key={date}
        language={language}
        name={firstName}
        text={text}
        date={date}
      />
    ))
    : null;

  return (
    <div className={styles.feedback}>
      <h2>{FEEDBACK[language].title}</h2>
      <Rating
        name='simple-controlled'
        value={rate}
        onChange={(e, newRate) => setRate(newRate)}
      />
      <form>
        <div className={styles.form}>
          <TextField
            className={styles.input}
            label={FEEDBACK[language].name}
            variant={INPUT_VARIANT}
            required
          />
          <TextField
            className={styles.input}
            label={FEEDBACK[language].email}
            variant={INPUT_VARIANT}
            required
          />
          <br />
          <TextField
            className={styles.textField}
            label={FEEDBACK[language].textField}
            multiline
            rows={10}
            variant={INPUT_VARIANT}
            required
          />
        </div>
        <Button className={styles.feedbackBtn}>
          {FEEDBACK[language].submit}
        </Button>
      </form>
      <hr />
      {feedbacks}
    </div>
  );
};

export default Feedback;
