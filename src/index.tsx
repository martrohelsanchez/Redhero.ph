import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';

import { GRID_THEME } from 'src/constants/configs';
import defaultTheme from 'src/themes/default';

import App from './App';
import GlobalStyle from './app.styles';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GridThemeProvider gridTheme={GRID_THEME}>
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </GridThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
