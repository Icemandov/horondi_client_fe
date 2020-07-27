import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  images: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridColumnGap: '2rem',
    gridRowGap: '0.3rem',
    gridTemplateColumns: '8rem 27.4rem',
    gridTemplateRows: '12rem 12rem 12rem',
    overflow: 'hidden',
    '@media (max-width: 1600px)': {
      gridTemplateColumns: '6rem 20.4rem',
      gridTemplateRows: '9rem 9rem 9rem'
    },
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
    '@media (max-width: 1300px)': {
      gridGap: '10px',
      gridTemplateColumns: '6rem 6rem 6rem',
      gridTemplateRows: '20rem 8rem',
      '& img': {
        height: '100%',
        '&:nth-child(1)': {
          gridArea: '1/1/2/4 !important'
        },
        '&:nth-child(2)': {
          gridArea: '2/1/3/2 !important'
        },
        '&:nth-child(3)': {
          gridArea: '2/2/3/3 !important'
        },
        '&:nth-child(4)': {
          gridArea: '2/3/3/4 !important'
        },
        gridTemplateColumns: '20rem',
        gridTemplateRows: '20rem'
      }
    }
  }
}));

export default useStyles;
