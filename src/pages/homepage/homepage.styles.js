import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  topGrid: {
    height: '500px',
    width: '100%',

  },
  mainText: {
    fontSize: '52px',
    color: '#121037',
    fontWeight: 600,

  },
  secondText: {
    fontSize: '52px',
    color: '#F9B934',
    fontWeight: 600,
  },
  buttonContainer: {
    marginRight: theme.spacing(3),

  },
  introductionGrid: {
    background: '#f7f9fa',

  },
  description: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    color: '#546e7a',
  },
  title: {
    fontSize: '52px',
    color: '#121037',
    fontWeight: 100,
    marginTop: '-15px',
  },
  subtitle: {
    fontSize: '22px',
    color: '#F9B934',
    fontWeight: 50,
  }

}));

export default useStyles;
