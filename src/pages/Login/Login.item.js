import React, { useEffect, useState } from 'react';
import { Button, ThemeProvider, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { useStyles, defaultTheme } from './Login.styles';
import {
  placeholders,
  OR_TEXT,
  LOGIN_FORM_LABEL,
  LOGIN_USER_DATA,
  EMPTY_FIELD,
  FORGOT_PASSWORD,
  REGISTER_FORM_LABEL
} from '../../configs';
import { getUser } from '../../redux/user/user.actions';
import { endAdornment } from '../../utils/eyeToggle';

const Login = ({ loginUser, loginError, history, language }) => {
  // VALUES
  const [user, setUser] = useState(LOGIN_USER_DATA);
  const [allFieldsSet, setAllFieldsSet] = useState(false);

  // VALIDATE
  const [shouldValidate, setShouldValidate] = useState(false);

  // SHOW PASSWORDS
  const [showPassword, setShowPassword] = useState(true);

  // LABELS
  const label = LOGIN_FORM_LABEL[language].value;
  const registration = REGISTER_FORM_LABEL[language].value;
  const forgotPassword = FORGOT_PASSWORD[language].value;
  const emailLabel = placeholders.email[language].value;
  const passwordLabel = placeholders.password[language].value;
  // HANDLERS
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleLogin = async () => {
    setShouldValidate(true);
    if (allFieldsSet) {
      try {
        loginUser(user);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // EYE

  // HOOKS
  useEffect(() => {
    if (Object.values(user).every((val) => val !== '')) {
      setAllFieldsSet(true);
    } else {
      setAllFieldsSet(false);
    }
    if (!loginError && loginError !== null) {
      history.push('/');
    }
  }, [user, loginError]);

  // CLASSES
  const classes = useStyles();
  const {
    login,
    loginWrapper,
    loginForm,
    heading,
    passwordInput,
    loginBtn,
    loginGroup,
    recoveryBtn,
    recoveryContainer,
    emailInput,
    orContainer,
    orText,
    googleBtn,
    registrContainer,
    registrBtn,
    googleLogo,
    disabledLogin
  } = classes;

  const { email, password } = user;

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={login}>
        <div className={loginWrapper}>
          <form className={loginForm}>
            <h2 className={heading}>{LOGIN_FORM_LABEL[language].value}</h2>
            <TextField
              label={emailLabel}
              className={emailInput}
              fullWidth
              variant='outlined'
              type='text'
              name='email'
              value={email}
              error={!email && shouldValidate}
              required
              onChange={handleChange}
              helperText={
                !email && shouldValidate ? EMPTY_FIELD[language].value : ''
              }
            />
            <TextField
              label={passwordLabel}
              className={passwordInput}
              fullWidth
              variant='outlined'
              type='password'
              InputProps={endAdornment(showPassword, setShowPassword)}
              name='password'
              value={password}
              error={!password && shouldValidate}
              required
              onChange={handleChange}
              helperText={
                !password && shouldValidate ? EMPTY_FIELD[language].value : ''
              }
            />
            <div className={recoveryContainer}>
              <Link to='/recovery' className={recoveryBtn}>
                {forgotPassword}
              </Link>
            </div>
            <div className={loginGroup}>
              <Button
                className={allFieldsSet ? loginBtn : disabledLogin}
                fullWidth
                onClick={handleLogin}
                disabled={!allFieldsSet}
              >
                {label}
              </Button>
              <p className={classes.loginError}>
                {loginError ? 'Wrong e-mail address or password' : ''}
              </p>
            </div>
            <div className={orContainer}>
              <span className={orText}>{OR_TEXT[language].value}</span>
            </div>
            <Button className={googleBtn} fullWidth>
              <span className={googleLogo} />
              Google
            </Button>
            <div className={registrContainer}>
              <Link to='/register' className={registrBtn}>
                {registration}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(getUser(user))
});

const mapStateToProps = (state) => ({
  loginError: state.user.error,
  language: state.language.language
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));