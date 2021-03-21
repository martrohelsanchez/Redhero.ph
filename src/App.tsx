import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GridThemeProvider } from 'styled-bootstrap-grid';

import defaultTheme from 'src/themes/default';
import { GRID_THEME } from 'src/constants/configs';

import routes from './constants/routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GridThemeProvider gridTheme={GRID_THEME}>
        <Router>
          <Switch>
            <Route exact path={routes.ROOT} component={} />
          </Switch>
        </Router>
      </GridThemeProvider>
    </ThemeProvider>
  );
}

export default App;
