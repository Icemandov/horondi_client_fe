import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backgroundColor,
    color: theme.palette.textColor,
    height: '100%'
  },
  container: {
    margin: '30px auto',
    maxWidth: 1280
  },
  title: {
    textAlign: 'center',
    margin: '20px 0'
  }
}));
