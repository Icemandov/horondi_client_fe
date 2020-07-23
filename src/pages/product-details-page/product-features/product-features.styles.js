import { makeStyles } from '@material-ui/core/styles';
import { price } from '../product-info/product-info.styles';

const useStyles = makeStyles((theme) => ({
  label: {
    alignSelf: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'center'
    }
  },
  additionalForm: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.6rem'
  },
  feature: {
    display: 'flex'
  },
  formControl: {
    marginRight: '0.7rem',
    minWidth: '7.5rem',
    '& .MuiInputBase-root .MuiSelect-root': {
      fontSize: '0.9rem'
    },
    '& label': {
      fontSize: '0.9rem',
      color: theme.palette.textColor
    },
    '& label.Mui-focused': {
      color: theme.palette.textColor
    }
  },
  price: {
    ...price
  },
  checkbox: {
    marginTop: '0.7rem',
    marginRight: '0.7rem',
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.button.normal.backgroundColor
    },
    '& .MuiFormControlLabel-root .MuiTypography-root': {
      fontSize: '0.9rem'
    }
  }
}));

export default useStyles;
