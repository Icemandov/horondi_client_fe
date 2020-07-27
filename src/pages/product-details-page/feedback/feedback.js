import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import useStyles from './feedback.styles';

import FeedbackItem from './feedback-item';
import { FEEDBACK_OPTIONS } from '../../../configs';

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
      <h2>{FEEDBACK_OPTIONS[language].title}</h2>
      <Rating
        name={FEEDBACK_OPTIONS.rateName}
        value={rate}
        onChange={(e, newRate) => setRate(newRate)}
      />
      <form>
        <div className={styles.form}>
          <TextField
            className={styles.input}
            label={FEEDBACK_OPTIONS[language].name}
            variant={FEEDBACK_OPTIONS.inputVariant}
            required
          />
          <TextField
            className={styles.input}
            label={FEEDBACK_OPTIONS[language].email}
            variant={FEEDBACK_OPTIONS.inputVariant}
            required
          />
          <br />
          <TextField
            className={styles.textField}
            label={FEEDBACK_OPTIONS[language].textField}
            multiline
            rows={FEEDBACK_OPTIONS.textFieldRows}
            variant={FEEDBACK_OPTIONS.inputVariant}
            required
          />
        </div>
        <Button className={styles.feedbackBtn}>
          {FEEDBACK_OPTIONS[language].submit}
        </Button>
      </form>
      <hr />
      {feedbacks}
    </div>
  );
};

export default Feedback;
