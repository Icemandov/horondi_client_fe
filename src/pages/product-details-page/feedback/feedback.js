import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './feedback.styles';
import FeedbackItem from './feedback-item';
import { FEEDBACK } from '../../../configs';

const Feedback = ({ language }) => {
  const styles = useStyles();
  const [rate, setRate] = useState(0);

  const textfieldLabel = FEEDBACK[language].textfield;
  const {title} = FEEDBACK[language];
  const nameLabel = FEEDBACK[language].name;
  const emailLabel = FEEDBACK[language].email;
  const submitLabel = FEEDBACK[language].submit;

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

  const feedbacks = productComments
    ? productComments.map(({ name, value, date }) => (
      <FeedbackItem key={name} name={name} value={value} date={date} />
    ))
    : null;

  return (
    <div className={styles.feedback}>
      <h2>{title}</h2>
      <Rating
        name='simple-controlled'
        value={rate}
        onChange={(e, newRate) => {
          setRate(newRate);
        }}
      />
      <form>
        <div className={styles.form}>
          <TextField
            className={styles.input}
            label={nameLabel}
            variant='outlined'
            required
          />
          <TextField
            className={styles.input}
            label={emailLabel}
            variant='outlined'
            required
          />{' '}
          <br />
          <TextField
            className={styles.textfield}
            label={textfieldLabel}
            multiline
            rows={10}
            variant='outlined'
            required
          />
        </div>
        <Button className={styles.feedbackBtn}>{submitLabel}</Button>
      </form>
      <hr />
      {feedbacks}
    </div>
  );
};

export default Feedback;
