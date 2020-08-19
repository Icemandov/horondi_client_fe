import { useState } from 'react';
import { FEEDBACK_DATA } from '../configs';

const useValidation = () => {
  const [firstNameValidated, setFirstNameValidated] = useState(false);
  const [emailValidated, setEmailValidated] = useState(false);
  const [textValidated, setTextValidated] = useState(false);
  const [editableText, setEditableText] = useState('');
  const [allFieldsValidated, setAllFieldsValidated] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [feedback, setFeedback] = useState(FEEDBACK_DATA);

  return {
    firstNameValidated,
    emailValidated,
    textValidated,
    allFieldsValidated,
    shouldValidate,
    feedback,
    editableText,
    setFirstNameValidated,
    setEmailValidated,
    setTextValidated,
    setAllFieldsValidated,
    setShouldValidate,
    setFeedback,
    setEditableText
  };
};

export default useValidation;
