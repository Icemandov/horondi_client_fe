import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import {
  TextField,
  Container,
  FormHelperText,
  Button,
  Link,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useStyles } from './Login.styles';
import { placeholders, formRegExp, errorMessages } from '../../configs';
import Validator from '../../components/validator';

const FORM_LABEL = 'Увійти'.toUpperCase();

const Registration = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const styles = useStyles();
  const language = 0;
  const email = placeholders.email[language].value;
  const password = placeholders.password[language].value;

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const endAdornment = {
    endAdornment: (
      <InputAdornment position='end'>
        <IconButton aria-label='toggle password visibility'>
          <Visibility />
          <VisibilityOff />
        </IconButton>
      </InputAdornment>
    )
  };

  return (
    <Container className={styles.containerBackground}>
      <form className={styles.registerForm} noValidate autoComplete='off'>
        <FormHelperText className={styles.formLabel}>
          {FORM_LABEL}
        </FormHelperText>
        <Validator
          helperText={errorMessages.email}
          type='text'
          label={email}
          regex={formRegExp.email}
          validate
          style={styles.textInput}
          inputProps={endAdornment}
        />
        <FormHelperText className={styles.errorMessageDiv}>
          <i className={styles.errorMessage} />
        </FormHelperText>
        <TextField
          className={styles.textInput}
          id='password'
          name='password'
          label={password}
          variant='outlined'
          value={user.password}
          onChange={handleChange}
        />
        <FormHelperText className={styles.errorMessageDiv} />
        <div className={styles.forgotPasswordDiv}>
          <Link to='/restore'>Забув пароль?</Link>
        </div>
        <Button className={styles.loginButton}>{FORM_LABEL}</Button>
        <div className={styles.orText}>АБО</div>
        <GoogleLogin id='google-button' className={styles.socialButtonDiv}>
          GOOGLE
        </GoogleLogin>
        <div className={styles.registrationButtonDiv}>
          <Link to='/register'>Реєстрація</Link>
        </div>
      </form>
    </Container>
  );
};

export default Registration;
