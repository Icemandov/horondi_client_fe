import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '35px'
  },
  orderFormWrapper: {
    margin: '0 auto',
    maxWidth: '800px'
  },
  subTitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '1.8rem',
    marginBottom: '20px'
  },
  contactsFields: {
    display: 'flex',
    flexDirection: 'column'
  },
  contactField: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  deliveryType: {
    marginBottom: '20px'
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  btnCreateOrder: {
    marginBottom: '20px',
    background: theme.palette.button.normal.backgroundColor,
    borderRadius: '5px',
    fontSize: '1.5em',
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    }
  },
  addInfo: {
    marginBottom: '20px',
    marginTop: '20px'
  },
  dataInput: {
    width: '350px'
  }
}));
