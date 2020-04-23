/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a6d4fa',
      main: '#90caf9',
      dark: '#648dae',
    },
    // secondary: {
    //   light: green[300],
    //   main: green[500],
    //   dark: green[700],
    // },
    background: {
      default: '#57595d',
    },
  },
});

const withRoot = (Component) => {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
};

export default withRoot;
