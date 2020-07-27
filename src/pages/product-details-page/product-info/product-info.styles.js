import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const circle = {
    marginLeft: '0.5rem',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    margin: '1rem 0',
    marginRight: '1.5rem'
  };

  return {
    head: {
      display: 'flex',
      justifyContent: 'space-between',
      '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    title: {
      fontSize: '1.4rem',
      fontWeight: '700'
    },
    description: {
      marginTop: '1.7rem',
      '@media (max-width: 600px)': {
        textAlign: 'center'
      }
    },
    price: {
      fontSize: '1.15rem',
      fontWeight: '700',
      color: theme.palette.textColor,
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      },
      paddingTop: '1.5rem',
      alignSelf: 'center'
    },
    look: {
      display: 'flex',
      marginTop: '0.6rem',
      wordSpacing: '0.2rem',
      maxHeight: '4.5rem',
      '@media (max-width: 600px)': {
        justifyContent: 'center'
      }
    },
    label: {
      alignSelf: 'center',
      '@media (max-width: 600px)': {
        justifyContent: 'center'
      }
    },
    colorCircle: ({ colorUrl }) => ({
      ...circle,
      backgroundImage: `url(${colorUrl})`
    }),
    patternCircle: ({ patternUrl }) => ({
      ...circle,
      backgroundImage: `url(${patternUrl})`
    })
  };
});

export default useStyles;
