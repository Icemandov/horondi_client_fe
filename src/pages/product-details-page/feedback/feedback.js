import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import useValidation from '../../../utils/use-validation';
import useStyles from './feedback.styles';

import { addComment } from '../../../redux/products/products.actions';
import FeedbackItem from './feedback-item';
import { Loader } from '../../../components/loader/loader';

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

  const { commentsLoading } = useSelector(({ Products }) => ({
    commentsLoading: Products.commentsLoading
  }));

  const {
    firstNameValidated,
    emailValidated,
    textValidated,
    allFieldsValidated,
    shouldValidate,
    feedback,
    setFirstNameValidated,
    setEmailValidated,
    setTextValidated,
    setAllFieldsValidated,
    setShouldValidate,
    setFeedback
  } = useValidation();

  const [rate, setRate] = useState(0);

  const userData = {
    _id: '9c031d62a3c4909b216e1d86',
    purchasedProduct: ['018a5631de33999e751dbd52'],
    email: 'poqj7ln40w@gmail.com',
    firstName: 'Макарій'
  };

  const { link, script } = formRegExp;
  const { purchasedProduct, _id } = userData || {};

  const hasRate = userRates
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

  const commentToSend = _id
    ? {
      ...FEEDBACK_DATA,
      user: _id,
      email: userData.email,
      firstName: userData.firstName,
      product: productId
    }
    : { ...FEEDBACK_DATA, product: productId };

  useEffect(() => {
    setFeedback(commentToSend);
  }, [setFeedback]);

  useEffect(() => {
    if (userData && textValidated) {
      setAllFieldsValidated(true);
    } else if (firstNameValidated && emailValidated && textValidated) {
      setAllFieldsValidated(true);
    } else {
      setAllFieldsValidated(false);
    }
  }, [
    firstNameValidated,
    emailValidated,
    textValidated,
    setAllFieldsValidated,
    userData
  ]);

  const { firstName, email, text } = feedback;

  const handleChange = (event, setValid, regExp) => {
    const { value, name } = event.target;
    const noScriptText = value.replace(script, '');
    const noLinkText =
      name === TEXT ? noScriptText.replace(link, '') : noScriptText;

    setFeedback({ ...feedback, [name]: noLinkText });

    if (noLinkText.match(regExp) && noLinkText.trim().length >= 2) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const handleFeedback = () => {
    setShouldValidate(true);
    if (allFieldsValidated) {
      dispatch(
        addComment({
          ...feedback,
          user: _id,
          rate,
          method: hasRate ? 'updateRate' : 'addRate'
        })
      );

      setFeedback(commentToSend);
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
      .map(({ text, date, _id, user }) => (
        <FeedbackItem
          key={_id}
          commentId={_id}
          language={language}
          user={user}
          text={text}
          date={date}
          productId={productId}
          loggedUserEmail={email}
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
            name='edit-rate'
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
                <div key={inputName}>
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
      {commentsLoading ? <Loader /> : feedbacks}
    </div>
  );
};

export default Feedback;
