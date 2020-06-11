import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#C2185B',
    secondary: '#448AFF',
    error: '#E64A19',
    textColor: '#cdc'
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#E64A19',
    textColor: '#fff',
    borderColor: '#cdc'
  }
});

export default theme;