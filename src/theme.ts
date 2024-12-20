import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey, yellow } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
  typography: {
    fontFamily: [
      //'-apple-system',
      //'BlinkMacSystemFont',
      //'"Segoe UI"',
      //'Roboto',
      '"Helvetica Neue"',
      //'Arial',
      //'sans-serif',
      //'"Apple Color Emoji"',
      //'"Segoe UI Emoji"',
      //'"Segoe UI Symbol"',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;