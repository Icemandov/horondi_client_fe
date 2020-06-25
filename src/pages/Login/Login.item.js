import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import {
  Container,
  FormHelperText,
  Button,
  InputAdornment,
  IconButton,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStyles } from './Login.styles';
import { placeholders, formRegExp, errorMessages } from '../../configs';
import Validator from '../../components/validator';

const language = 0;
const FORM_LABEL = [
  {
    lang: 'uk',
    value: 'увійти'.toUpperCase()
  },
  { lang: 'eng', value: 'log in'.toUpperCase() }
];

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [emailIsValidated, setEmailIsValidated] = useState(false);
  const [passwordIsValidated, setPasswordIsValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const styles = useStyles();

  const disableButtonStyle =
    emailIsValidated && passwordIsValidated
      ? styles.loginButton
      : styles.disabledLoginButton;
  const label = FORM_LABEL[language].value;
  const email = placeholders.email[language].value;
  const password = placeholders.password[language].value;

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000'
      },
      secondary: {
        main: '#949494'
      }
    }
  });
  function toggleInputType(e, showPass) {
    const input = e.currentTarget.parentElement.previousSibling;
    if (input.type === 'password') {
      input.type = 'text';
      showPass(false);
    } else {
      input.type = 'password';
      showPass(true);
    }
  }

  function endAdornment(isVisible, setShowPass) {
    return {
      endAdornment: (
        <InputAdornment position='end'>
          <IconButton
            aria-label='toggle password visibility'
            onClick={(e) => toggleInputType(e, setShowPass)}
          >
            {isVisible ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      )
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.containerBackground}>
        <form className={styles.registerForm} noValidate autoComplete='off'>
          <FormHelperText className={styles.formLabel}>{label}</FormHelperText>
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
            inputProps={endAdornment(showPassword, setShowPassword)}
            setIsValidated={setPasswordIsValidated}
          />
          <div className={styles.forgotPasswordDiv}>
            <Link to='/restore'>Забув пароль?</Link>
          </div>
          <Button
            className={disableButtonStyle}
            disabled={!emailIsValidated || !passwordIsValidated}
          >
            {label}
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
    </ThemeProvider>
  );
};

export default Login;
