import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    color: '#000000',
    '& hr': {
      border: 'none',
      color: '#C2C2C2',
      backgroundColor: '#C2C2C2',
      height: '0.05rem'
    }
  },
  comments: {
    margin: '0.5rem 0 1.5rem'
  },
  date: {
    color: '#474747'
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default useStyles;
