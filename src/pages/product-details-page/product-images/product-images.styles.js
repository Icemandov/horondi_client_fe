import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  images: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridColumnGap: '2rem',
    gridRowGap: '0.3rem',
    gridTemplateColumns: '6rem 20.5rem',
    gridTemplateRows: '9rem 9rem 9rem',
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
        gridTemplateColumns: '20rem',
        gridTemplateRows: '20rem'
      }
    },
    '@media max-width: 1300px)': {
      gridGap: '10px',
      gridTemplateColumns: '5rem 16.7rem',
      gridTemplateRows: '6rem 6rem 6rem'
    }
  }
}));

export default useStyles;
