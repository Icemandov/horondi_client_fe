import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat',
    width: '80%',
    minHeight: '1200px',
    margin: '2rem auto',
    background: '#F5F5F5',
    border: '1px solid #D3D3D3',
    boxSizing: 'border-box',
    borderRadius: '5px',
    '@media (max-width: 600px)': {
      width: '100vw',
      margin: '0'
    }
  },
  product: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    padding: '2rem',
    '@media (max-width: 1150px)': {
      display: 'block'
    }
  },
  productDetails: {
    wordSpacing: '0.2rem',
    fontWeight: '600',
    '@media (max-width: 1150px)': {
      marginTop: '2rem'
    },
    '@media (max-width: 600px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }
}));
