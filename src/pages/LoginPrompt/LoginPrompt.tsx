import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, Button, Text } from 'src/components';
import routes from 'src/constants/routes';
import MainLayout from 'src/Layout/MainLayout';

import * as S from './LoginPrompt.styles';

function LoginPrompt({ history }: RouteComponentProps) {
  function directToLogin() {
    history.push(routes.LOGIN);
  }

  function directToSignup() {
    history.push(routes.SIGN_UP);
  }

  return (
    <MainLayout>
      <Box margin="81px 0 0 0">
        <Text label="Hold on.." type="roundHeavy1" />
      </Box>
      <Box margin="10px 0 0 0">
        <Text
          label="To receive notifications from donors we need you to sign in to your account"
          type="textSemibold2"
        />
      </Box>
      <S.Bottom>
        <Button label="Login" type="white1" onClick={directToLogin} />
        <Button label="Create an account" type="white1" onClick={directToSignup} />
      </S.Bottom>
    </MainLayout>
  );
}

export default LoginPrompt;
