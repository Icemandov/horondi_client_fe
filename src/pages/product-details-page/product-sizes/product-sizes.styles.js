import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sizeButtons: {
    marginBottom: '1.6rem'
  },
  label: {
    alignSelf: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  },
  error: {
    marginTop: '0.3rem',
    fontSize: '0.75rem',
    textAlign: 'left',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    fontWeight: '400',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
    color: '#f44336',
    position: 'absolute'
  },
  selectedSize: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black'
    }
  }
}));

export default useStyles;
