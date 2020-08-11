import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './feedback.styles';

import FeedbackItem from './feedback-item';

import {
  FEEDBACK_DATA,
  TEXT,
  formRegExp,
  errorMessages
} from '../../../configs';
import { FEEDBACK } from '../../../translations/product-details.translations';

const Feedback = ({ language, comments, productId }) => {
  const styles = useStyles();
  const { userData } = useSelector(({ User }) => ({
    userData: User.userData
  }));

  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [textValidated, setTextValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [feedback, setFeedback] = useState(FEEDBACK_DATA);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    setFeedback(
      userData
        ? { user: userData._id, product: productId }
        : { ...FEEDBACK_DATA, product: productId }
    );
  }, [userData, productId]);

  useEffect(() => {
    if (userData && textValidated) {
      setAllFieldsValidated(true);
    } else if (firstNameValidated && emailValidated && textValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [firstNameValidated, emailValidated, textValidated, userData]);

  const { firstName, email, text } = feedback;

  const handleChange = (event, setValid, regExp) => {
    const { value, name } = event.target;
    const noscriptText = value.replace(formRegExp.script, '');
    const filteredText =
      name === TEXT
        ? noscriptText.replace(formRegExp.link, '***')
        : noscriptText;

    setFeedback({ ...feedback, [name]: filteredText });

    if (filteredText.match(regExp)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleFeedback = () => {
    setShouldValidate(true);

    if (allFieldsValidated) {
      console.log('add feedback', feedback);

      setFeedback({ ...FEEDBACK_DATA, product: productId });
      setShouldValidate(false);
      setAllFieldsValidated(false);
      setEmailValidated(false);
      setFirstNameValidated(false);
      setTextValidated(false);
      setRate(0);
    }
  };

  const userFields = {
    firstNameField: {
      inputName: 'firstName',
      errorMessage: errorMessages[language].value.firstname,
      value: firstName,
      onChange: handleChange,
      validation: {
        value: firstNameValidated,
        setValid: setFirstNameValidated
      },
      type: TEXT,
      regExp: formRegExp.name,
      show: !userData
    },
    email: {
      inputName: 'email',
      errorMessage: errorMessages[language].value.email,
      value: email,
      onChange: handleChange,
      validation: {
        value: emailValidated,
        setValid: setEmailValidated
      },
      type: TEXT,
      regExp: formRegExp.email,
      show: !userData
    },
    text: {
      inputName: TEXT,
      errorMessage: errorMessages[language].value.text,
      value: text,
      onChange: handleChange,
      validation: {
        value: textValidated,
        setValid: setTextValidated
      },
      type: TEXT,
      regExp: formRegExp.text,
      multiline: true,
      rows: 10
    }
  };

  const feedbacks = comments
    ? comments
      .sort((a, b) => b.date - a.date)
      .map(({ text, date, user: { firstName } }) => (
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
          {Object.values(
            userFields
          ).map(
            ({
              inputName,
              errorMessage,
              value,
              onChange,
              validation,
              type,
              regExp,
              multiline = null,
              rows = null,
              show = true
            }) =>
              show ? (
                <TextField
                  required
                  className={`${
                    inputName === TEXT ? styles.text : styles.input
                  }`}
                  key={FEEDBACK[language][inputName]}
                  label={FEEDBACK[language][inputName]}
                  variant='outlined'
                  name={inputName}
                  error={!validation.value && shouldValidate}
                  helperText={
                    !validation.value && shouldValidate ? `${errorMessage}` : ''
                  }
                  onChange={(e) => onChange(e, validation.setValid, regExp)}
                  value={value}
                  type={type}
                  multiline={multiline}
                  rows={rows}
                />
              ) : null
          )}
        </div>
        <Button className={styles.feedbackBtn} onClick={handleFeedback}>
          {FEEDBACK[language].submit}
        </Button>
      </form>
      <hr />
      {feedbacks}
    </div>
  );
};

export default Feedback;
