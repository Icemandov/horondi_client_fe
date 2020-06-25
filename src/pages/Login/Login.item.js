import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import {
  Container,
  FormHelperText,
  Button,
  Link,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { VisibilityOff } from '@material-ui/icons';
import { useStyles } from './Login.styles';
import { placeholders, formRegExp, errorMessages } from '../../configs';
import Validator from '../../components/validator';

const FORM_LABEL = 'Увійти'.toUpperCase();

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [emailIsValidated, setEmailIsValidated] = useState(false);
  const [passwordIsValidated, setPasswordIsValidated] = useState(false);
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
          name='email'
          label={email}
          regex={formRegExp.email}
          validate
          style={styles.textInput}
          handler={handleChange}
          setIsValidated={setEmailIsValidated}
        />

        <Validator
          helperText={errorMessages.password}
          type='password'
          name='password'
          label={password}
          variant='outlined'
          regex={formRegExp.password}
          validate
          handler={handleChange}
          style={styles.textInput}
          value={user.password}
          inputProps={endAdornment}
          setIsValidated={setPasswordIsValidated}
        />
        <div className={styles.forgotPasswordDiv}>
          <Link to='/restore'>Забув пароль?</Link>
        </div>
        <Button
          className={styles.loginButton}
          disabled={!emailIsValidated || !passwordIsValidated}
        >
          {FORM_LABEL}
        </Button>
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

export default Login;
