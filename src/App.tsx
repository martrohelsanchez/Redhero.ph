import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GridThemeProvider } from 'styled-bootstrap-grid';

import defaultTheme from 'src/themes/default';
import { GRID_THEME } from 'src/constants/configs';
import LandingPage from 'src/pages/LandingPage/LandingPage';
import FindBlood from 'src/pages/FindBlood/FindBlood';
import Institutions from 'src/pages/Institutions/Institutions';
import LoginPrompt from 'src/pages/LoginPrompt/LoginPrompt';
import PatientBloodType from 'src/pages/PatientBloodType/PatientBloodType';
import SignUp from 'src/pages/SignUp/SignUp';
import Login from 'src/pages/Login/Login';
import UserInfo1 from 'src/pages/UserInfo1/UserInfo1';
import UserInfo2 from 'src/pages/UserInfo2/UserInfo2';
import DonorSignUp from 'src/pages/DonorSignUp/DonorSignUp';
import Recognition from 'src/pages/Recognition';

import routes from './constants/routes';
import GlobalStyle from './app.styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GridThemeProvider gridTheme={GRID_THEME}>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route exact path={routes.ROOT} component={LandingPage} />
            <Route exact path={routes.FIND_BLOOD} component={FindBlood} />
            <Route exact path={routes.FIND_INSTITUTIONS} component={Institutions} />
            <Route exact path={routes.FIND_INSTITUTIONS} component={Institutions} />
            <Route exact path={routes.PATIENT_BLOOD_TYPE} component={PatientBloodType} />
            <Route exact path={routes.LOGIN_PROMPT} component={LoginPrompt} />
            <Route exact path={routes.SIGN_UP} component={SignUp} />
            <Route exact path={routes.LOGIN} component={Login} />
            <Route exact path={routes.USER_INFO_1} component={UserInfo1} />
            <Route exact path={routes.USER_INFO_2} component={UserInfo2} />
            <Route exact path={routes.DONOR_SIGN_UP} component={DonorSignUp} />
            <Route exact path={routes.RECOGNITION} component={Recognition} />
          </Switch>
        </Router>
      </GridThemeProvider>
    </ThemeProvider>
  );
}

export default App;
