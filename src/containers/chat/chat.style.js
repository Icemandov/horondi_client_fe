import { makeStyles } from '@material-ui/core/styles';

const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const useStyles = makeStyles((theme) => ({
  chatIcon: ({ iconsVisible }) => ({
    ...flexCenter,
    background: iconsVisible ? '#E4B200' : 'black',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    position: 'fixed',
    right: '4%',
    bottom: '2%',
    '&:hover': {
      cursor: 'pointer',
      background: '#E4B200'
    }
  }),
  iconsMessengers: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'fixed',
    right: '4%',
    bottom: '8.5%',
    width: '60px',
    height: '150px',
    flexDirection: 'column',
    zIndex: '3'
  },
  msgIcon: {
    ...flexCenter,
    width: '50px',
    height: '50px',
    background: 'black',
    borderRadius: '50%',
    marginBottom: '20px',
    cursor: 'pointer',
    '&:hover': {
      background: '#E4B200'
    }
  },
  msgIconActive: (mailFormVisible) => ({
    ...flexCenter,
    width: '50px',
    height: '50px',
    background: mailFormVisible ? '#E4B200' : 'black',
    borderRadius: '50%',
    marginBottom: '20px',
    cursor: 'pointer'
  }),
  mailForm: {
    borderRadius: '4px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    right: '9%',
    bottom: '12%',
    width: '320px',
    height: '600px',
    background: 'white',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), ' +
      '0px 1px 1px 0px rgba(0,0,0,0.14), ' +
      '0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  cancelIcon: {
    position: 'absolute',
    right: '1px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  contacts: {
    ...flexCenter,
    background: theme.palette.backgroundColor,
    width: '100%',
    height: '40%',
    fontSize: '1.1rem',
    flexDirection: 'column',
    borderRadius: '4px'
  },
  contactsTitle: {
    margin: '3px 0 2px 0',
    fontSize: '1.3rem'
  },
  phoneNumbers: {
    color: theme.palette.textColor
  },
  mailTitle: {
    marginTop: '5%',
    marginBottom: '6%',
    fontSize: '1.3rem'
  },
  logo: {
    height: '15px',
    width: '15px'
  },
  formField: ({ themeMode }) => ({
    ...flexCenter,
    background: themeMode ? '#efefef' : '#232323',
    flexDirection: 'column',
    width: '100%',
    height: '75%',
    borderRadius: '4px'
  }),
  btnSend: {
    marginBottom: '20px',
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    fontSize: '1.5em',
    padding: 10,
    color: theme.palette.button.normal.color,
    '& a': {
      color: 'inherit'
    },
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '@media (max-width: 768px)': {
      fontSize: '1em',
      padding: 5
    }
  },
  dataInput: {
    height: '100%',
    marginBottom: '15px'
  },
  icon: {
    color: theme.palette.white
  }
}));
