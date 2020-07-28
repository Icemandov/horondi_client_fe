import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '.5rem',
    marginRight: '17px !important',
    display: 'inline-block',
    '& .MuiOutlinedInput-input': {
      height: '25px',
      fontSize: '13px',
      padding: '0 1.2rem 0 .4rem'
    },
    '& .MuiOutlinedInput-input:focus': {
      borderColor: 'black'
    },
    '& svg': {
      right: '0'
    }
  },
  sortByText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px'
  },
  sortDiv: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '25px !important',
    '& div': {
      '@media (max-width:500px)': {
        marginRight: '0 !important',
        marginBottom: '.5rem'
      }
    }
  },

  activeButton: {
    backgroundColor: 'black',
    color: 'white'
  }
}));

export default useStyles;