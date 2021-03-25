import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Box, FlexCenter, Text } from 'src/components';
import facebokIconImg from 'src/assets/images/facebookIcon.svg';
import { auth, facebookProvider, googleProvider } from 'src/firebase';
import googleIconImg from 'src/assets/images/googleIcon.png';
import MainLayout from 'src/Layout/MainLayout';
import routes from 'src/constants/routes';

import * as S from './Login.styles';

function SignUp(props: RouteComponentProps) {
  const { history } = props;

  async function loginWithGoggle() {
    try {
      await auth.signInWithPopup(googleProvider);

      history.push(routes.DONORS);
    } catch (e) {
      console.error(e);
    }
  }

  async function loginWithFacebok() {
    try {
      await auth.signInWithPopup(facebookProvider);

      history.push(routes.DONORS);
    } catch (e) {
      console.error(e);
    }
  }

  const googleIcon = <img alt="Google Icon" height="33px" src={googleIconImg} />;
  const facebookIcon = <img alt="Facebook Icon" height="33px" src={facebokIconImg} />;

  return (
    <MainLayout>
      <Box margin="233px 0 0 0">
        <FlexCenter>
          <Text label="Login" type="roundHeavy1" />
        </FlexCenter>
      </Box>
      <S.Bottom>
        <S.GoggleBtn
          label="Login with Google"
          leftIcon={googleIcon}
          type="white1"
          onClick={loginWithGoggle}
        />
        <S.FacebookBtn
          label="Login with Facebook"
          leftIcon={facebookIcon}
          type="white1"
          onClick={loginWithFacebok}
        />
      </S.Bottom>
    </MainLayout>
  );
}

export default SignUp;
