import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import useStyles from './feedback.styles';

import FeedbackItem from './feedback-item';
import { FEEDBACK } from '../../../configs';

const Feedback = ({ language }) => {
  const inputVariant = 'outlined';
  const textFieldRows = 10;
  const rateName = 'simple-controlled';
  const productComments = [
    {
      name: 'Dimas',
      value: 'pushka',
      date: '19/07/2007'
    },
    {
      name: 'Vovas',
      value: 'skazka',
      date: '19/07/2017'
    }
  ];

  const styles = useStyles();

  const [rate, setRate] = useState(0);

  const feedbacks = productComments
    ? productComments.map(({ name, value, date }) => (
      <FeedbackItem key={name} name={name} value={value} date={date} />
    ))
    : null;

  return (
    <div className={styles.feedback}>
      <h2>{FEEDBACK[language].title}</h2>
      <Rating
        name={rateName}
        value={rate}
        onChange={(e, newRate) => setRate(newRate)}
      />
      <form>
        <div className={styles.form}>
          <TextField
            className={styles.input}
            label={FEEDBACK[language].name}
            variant={inputVariant}
            required
          />
          <TextField
            className={styles.input}
            label={FEEDBACK[language].email}
            variant={inputVariant}
            required
          />
          <br />
          <TextField
            className={styles.textField}
            label={FEEDBACK[language].textField}
            multiline
            rows={textFieldRows}
            variant={inputVariant}
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
