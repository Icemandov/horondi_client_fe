import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const color = theme.palette.textColor;

  return {
    container: {
      color,
      '& hr': {
        border: 'none',
        color: '#C2C2C2',
        backgroundColor: '#C2C2C2',
        height: '0.05rem'
      }
    },
    comments: {
      fontWeight: '500'
    },
    date: {
      height: '30px',
      color,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginTop: '10px'
    },
    comment: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    commentActions: {
      width: '60px',
      justifySelf: 'flex-end'
    },
    editIcon: {
      marginRight: '5px',
      color: '#3a6ac9',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    deleteIcon: {
      color: 'tomato',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    text: {
      flexGrow: 1,
      marginRight: '10px',
      marginTop: '20px'
    },
    button: {
      textTransform: 'none',
      textAlign: 'center',
      fontSize: '1rem',
      backgroundColor: theme.palette.button.normal.backgroundColor,
      color: theme.palette.button.normal.color,
      '&:hover': {
        backgroundColor: theme.palette.button.hover.backgroundColor,
        color: theme.palette.button.hover.color
      }
    },
    user: {
      display: 'flex',
      marginTop: '15px'
    },
    avatar: {
      width: '60px',
      height: '60px'
    },
    name: {
      marginTop: '30px',
      marginLeft: '15px',
      fontSize: '1rem',
      fontWeight: '700'
    },
    icons: {
      height: '30px'
    },
    loader: {
      marginTop: '45px'
    },
    line: {
      marginTop: '45px'
    },
    clear: {
      marginTop: '15px'
    }
  };
});

export default useStyles;
