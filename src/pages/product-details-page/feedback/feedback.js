import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import useStyles from './feedback.styles';

import { changeRate } from '../../../redux/products/products.actions';
import FeedbackItem from './feedback-item';

import {
  FEEDBACK_DATA,
  TEXT,
  formRegExp,
  errorMessages
} from '../../../configs';
import { FEEDBACK } from '../../../translations/product-details.translations';

const Feedback = ({ language, comments, productId, userRates }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  // const { userData } = useSelector(({ User }) => ({
  //   userData: User.userData
  // }));
  const userData = null;
  // {
  //   _id:'02db86e74520d8d8f7947305',
  //   purchasedProduct: [
  //     "90d5c6dc0663662f949d3fbb"
  //   ]
  // }
  const { link, script } = formRegExp;
  const { purchasedProduct, _id } = userData || {};
  const hasRate = userData
    ? userRates.some(({ user }) => user._id === _id)
    : null;
  const hasBought = purchasedProduct
    ? purchasedProduct.some((product) => product === productId)
    : null;
  const rateTip = !_id
    ? FEEDBACK[language].unregisteredTip
    : !hasBought
      ? FEEDBACK[language].registeredTip
      : FEEDBACK[language].successfulTip;

  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [textValidated, setTextValidated] = useState(false);
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [feedback, setFeedback] = useState(FEEDBACK_DATA);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    setFeedback(
      _id
        ? { user: _id, product: productId }
        : { ...FEEDBACK_DATA, product: productId }
    );
  }, [_id, productId]);

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
    const noscriptText = value.replace(script, '');
    const filteredText =
      name === TEXT ? noscriptText.replace(link, '') : noscriptText;

    setFeedback({ ...feedback, [name]: filteredText });

    if (filteredText.match(regExp)) {
      filteredText.trim().length >= 2 ? setValid(true) : setValid(false);
    } else {
      setValid(false);
    }
  };

  const handleFeedback = () => {
    setShouldValidate(true);
    if (allFieldsValidated) {
      if (rate > 0) {
        dispatch(
          changeRate({
            product: productId,
            user: _id,
            rate,
            method: hasRate ? 'updateRate' : 'addRate'
          })
        );
      }

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
      rows: 7
    }
  };

  const feedbacks = comments
    ? comments
      .sort((a, b) => b.date - a.date)
      .map(({ text, date }) => (
        <FeedbackItem
          key={date}
          language={language}
          text={text}
          date={date}
        />
      ))
    : null;

  return (
    <div className={styles.feedback}>
      <h2>{FEEDBACK[language].title}</h2>
      <Tooltip title={rateTip} placement='right'>
        <span className={styles.rate}>
          <Rating
            disabled={!hasBought}
            name='simple-controlled'
            value={rate}
            onChange={(e, newRate) => setRate(newRate)}
          />
        </span>
      </Tooltip>
      <form>
        <div className={styles.form}>
          {Object.values(userFields).map(
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
                <div key={FEEDBACK[language][inputName]}>
                  <TextField
                    required
                    className={`${
                      inputName === TEXT ? styles.text : styles.input
                    }`}
                    label={FEEDBACK[language][inputName]}
                    variant='outlined'
                    name={inputName}
                    error={!validation.value && shouldValidate}
                    helperText={
                      !validation.value && shouldValidate
                        ? `${errorMessage}`
                        : ''
                    }
                    onChange={(e) => onChange(e, validation.setValid, regExp)}
                    value={value}
                    type={type}
                    multiline={multiline}
                    rows={rows}
                  />
                </div>
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
