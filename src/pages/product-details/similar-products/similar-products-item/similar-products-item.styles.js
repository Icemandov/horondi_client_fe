import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  similarItem: (props) => ({
    background: `url(${props.image}) no-repeat center`,
    width: '280px',
    height: '330px',
    backgroundSize: 'cover',
    backgroundColor: 'lightgray',
    '&:hover': {
      cursor: 'pointer'
    },
    margin: '0 auto',
    fontWeight: '500',
    borderRadius: '5px'
  }),
  info: {
    height: '70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '10px',
    backgroundColor: 'rgb(3, 3, 3,.6)',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    width: '280px',
    borderRadius: '0px 0px 5px 5px'
  }
}));

export default useStyles;
