import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  containerBackground: {
    background:
      'url("https://horondi.blob.core.windows.net/horondi/backgrounds/bg-home-page.jpg") no-repeat ',
    backgroundSize: 'cover',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100vh',
    zIndex: 2,
    position: 'relative'
  },
  registerForm: {
    top: '10vh',
    right: '10vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px',
    height: '500px',
    background: '#FFFFFF',
    marginRight: '63px'
  },
  formLabel: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#000000',
    background: '#FFFFFF',
    paddingTop: '0',
    paddingBottom: '51px'
  },
  textInput: {
    width: '300px',
    background: '#FFFFFF',
    borderRadius: '5px',
    marginBottom: '10px',
    color: 'black',
    paddingBottom: '22.5px',
    '& label': {
      transform: 'translate(14px, 14px) scale(1)'
    }
  },
  forgotPasswordDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '300px',
    marginBottom: '.5rem'
  },
  registrationButtonDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '300px',
    marginTop: '.5rem'
  },
  loginButton: {
    width: '300px',
    height: '41.39px',
    background: '#000000',
    borderRadius: '5px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#FFFFFF'
  },
  orText: {
    paddingTop: '12px',
    paddingBottom: '20px'
  },
  registrationLinkDiv: {
    display: 'flex',
    flexDirection: 'row',
    width: '300px',
    justifyContent: 'flex-end',
    height: '17px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
    marginTop: '.5rem',
    marginBottom: '13px'
  },
  socialButtonDiv: {
    display: 'flex',
    justifyContent: 'center',
    height: '41.39px',
    width: '300px'
  },
  errorMessageDiv: {
    height: '25px',
    width: '300px'
  },
  errorMessage: {
    color: 'red'
  }
}));
