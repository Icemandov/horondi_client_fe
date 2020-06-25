import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const Validator = ({
  type = 'text',
  name,
  label,
  value,
  handler = () => {},
  getInputValue = () => {},
  setIsValidated = () => {},
  regex = '',
  validate = false,
  variant = 'outlined',
  style,
  helperText='',
  inputProps = {}
}) => {
  const [validated, setValidated] = useState('true');
  const errorText = validated ? '' : helperText;
  const changeHandler = (e) => {
    handler(e);
    getInputValue(e.target.value);
    if (validate) {
      setValidated(false);
      setIsValidated(false);
      if (!regex) {
        e.stopPropagation();
        return false;
      }
      if (e.target.value.match(regex)) {
        setValidated(true);
        setIsValidated(true);
      }
    }
  };

  return (
    <TextField
      InputProps={inputProps}
      className={style}
      helperText={errorText}
      variant={variant}
      label={label}
      type={type}
      name={name}
      onChange={changeHandler}
      value={value}
      error={!validated}
    />
  );
};

export default Validator;
