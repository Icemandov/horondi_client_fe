import { makeStyles } from '@material-ui/core/styles';

const circle = {
  marginLeft: '0.5rem',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  margin: '1rem 0',
  marginRight: '1.5rem'
};

const price = {
  fontSize: '1.15rem',
  fontWeight: 'bolder',
  color: '#6c757d',
  '@media (max-width: 600px)': {
    fontSize: '0.9rem'
  }
};

const heart = {
  marginTop: '1.2rem',
  marginRight: '1.2rem',
  fontSize: '2.5rem',
  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer'
  },
  '@media (max-width: 600px)': {
    marginRight: '0'
  }
};

export const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: 'Montserrat',
    width: '80%',
    minHeight: '1200px',
    margin: '2rem auto',
    background: '#F5F5F5',
    border: '1px solid #D3D3D3',
    boxSizing: 'border-box',
    borderRadius: '5px'
  },
  product: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    padding: '2rem',
    '@media (max-width: 1150px)': {
      display: 'block'
    }
  },
  images: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridGap: '2rem',
    gridTemplateColumns: '6rem 21rem',
    gridTemplateRows: '6.5rem 6.5rem 6.5rem',
    overflow: 'hidden',
    '& img': {
      transition: 'all 0.3s',
      transform: 'scale(1)',
      width: '100%',
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)'
      },
      '&:nth-child(1)': {
        gridColumn: '2',
        gridRow: '1 / 4'
      },
      '&:nth-child(2)': {
        gridColumn: '1',
        gridRow: '1'
      },
      '&:nth-child(3)': {
        gridColumn: '1',
        gridRow: '2'
      },
      '&:nth-child(4)': {
        gridColumn: '1',
        gridRow: '3'
      }
    },
    '@media (max-width: 1150px)': {
      '& img': {
        '&:nth-child(2)': {
          display: 'none'
        },
        '&:nth-child(3)': {
          display: 'none'
        },
        '&:nth-child(4)': {
          display: 'none'
        },
        gridColumnGap: '0',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '20rem'
      }
    },
    '@media max-width: 1300px)': {
      gridGap: '10px',
      gridTemplateColumns: '5rem 16.7rem',
      gridTemplateRows: '6rem 6rem 6rem'
    }
  },
  productInfo: {
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
  },
  promotionalPrice: {
    ...price,
    paddingTop: '1.5rem',
    alignSelf: 'center'
  },
  defaultPrice: {
    ...price,
    textDecoration: 'line-through',
    color: '#cacaca'
  },
  look: {
    display: 'flex',
    marginTop: '0.6rem',
    wordSpacing: '0.2rem',
    maxHeight: '4.5rem',
    '@media (max-width: 600px)': {
      margin: '0 auto'
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
  }),
  selectedSize: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black'
    }
  },
  heart: {
    ...heart
  },
  redHeart: {
    ...heart,
    color: '#ed0505'
  },
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
  pdpButton: {
    marginRight: '1rem',
    marginTop: '1rem',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1rem',
    backgroundColor: theme.palette.button.normal.backgroundColor,
    color: theme.palette.button.normal.color,
    '&:hover': {
      backgroundColor: theme.palette.button.hover.backgroundColor,
      color: theme.palette.button.hover.color
    },
    '&:disabled': {
      background: '#999999',
      color: '#C2C2C2'
    },
    '@media (max-width: 600px)': {
      marginRight: '0',
      paddingRight: '0',
      fontSize: '0.8rem'
    }
  },
  submit: {
    display: 'flex',
    '@media (max-width: 600px)': {
      '& *': {
        marginRight: '0.5rem'
      }
    },
    '@media (max-width: 1300px)': {
      marginTop: '0'
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
  buttons: {
    marginBottom: '1.6rem'
  },
  formControl: {
    marginRight: '0.7rem',
    minWidth: '8rem',
    '& label.Mui-focused': {
      color: theme.palette.textColor
    }
  },
  additionalForm: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.6rem'
  },
  checkbox: {
    marginTop: '0.7rem',
    marginRight: '0.7rem',
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.button.normal.backgroundColor
    }
  },
  feature: {
    display: 'flex'
  }
}));
