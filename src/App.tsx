import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
import Donors from 'src/pages/Donors';
import LoadingPage from 'src/pages/LoadingPage';
import PageNotFound from 'src/pages/PageNotFound';
import Chat from 'src/pages/Chat';
import { UserContext } from 'src/context/userContext';

import routes from './constants/routes';
import useAuth from './hoooks/useAuth';

function App() {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <LoadingPage />;
  }

  const isAuthenticated = !!user;

  if (isAuthenticated) {
    return (
      <UserContext.Provider value={user}>
        <Router>
          <Switch>
            <Route exact path={routes.ROOT} component={LandingPage} />
            <Route exact path={routes.FIND_BLOOD} component={FindBlood} />
            <Route exact path={routes.FIND_INSTITUTIONS} component={Institutions} />
            <Route exact path={routes.PATIENT_BLOOD_TYPE} component={PatientBloodType} />
            <Route exact path={routes.DONOR_SIGN_UP} component={DonorSignUp} />
            <Route exact path={routes.RECOGNITION} component={Recognition} />
            <Route exact path={routes.USER_INFO_1} component={UserInfo1} />
            <Route exact path={routes.USER_INFO_2} component={UserInfo2} />
            <Route exact path={routes.DONORS} component={Donors} />
            <Route exact path={routes.CHAT} component={Chat} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={user}>
        <Router>
          <Switch>
            <Route exact path={routes.ROOT} component={LandingPage} />
            <Route exact path={routes.FIND_BLOOD} component={FindBlood} />
            <Route exact path={routes.FIND_INSTITUTIONS} component={Institutions} />
            <Route exact path={routes.PATIENT_BLOOD_TYPE} component={PatientBloodType} />
            <Route exact path={routes.LOGIN_PROMPT} component={LoginPrompt} />
            <Route exact path={routes.SIGN_UP} component={SignUp} />
            <Route exact path={routes.LOGIN} component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
