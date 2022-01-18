import { createTheme } from '@material-ui/core/styles';
import { indigo, teal, blueGrey, cyan } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#5e92f3',
      main: '#1565c0',
      dark: '#003c8f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4fb3df',
      main: '#00838f',
      dark: '#005662',
      contrastText: '#fff',
    },
    text: {
      primary: indigo[900],
      secondary: teal[800],
      disabled: blueGrey[500],
      hint: cyan[500],
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontSize: 12,
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiCheckbox: {
      color: 'primary',
    },
    MuiRadio: {
      color: 'primary',
    },
    MuiSwitch: {
      color: 'primary',
    },
    MuiMenuList: {
      color: teal[900],
    },
  },
});
