import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, FlexCenter, Text } from 'src/components';
import facebokIconImg from 'src/assets/images/facebookIcon.svg';
import { auth, facebookProvider, googleProvider } from 'src/firebase';
import googleIconImg from 'src/assets/images/googleIcon.png';
import routes from 'src/constants/routes';
import MainLayout from 'src/Layout/MainLayout';
import { UserContext } from 'src/context/userContext';

import * as S from './SignUp.styles';

function SignUp(props: RouteComponentProps) {
  const { history } = props;

  const userInfo = useContext(UserContext);

  if (userInfo) {
    history.push(routes.USER_INFO_1);
  }

  async function signUpWithGoggle() {
    try {
      await auth.signInWithRedirect(googleProvider);

      history.push(routes.USER_INFO_1);
    } catch (e) {
      console.error(e);
    }
  }

  async function signUpWithFacebok() {
    try {
      await auth.signInWithPopup(facebookProvider);

      history.push(routes.USER_INFO_1);
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
          <Text label="Sign Up" type="roundHeavy1" />
        </FlexCenter>
      </Box>
      <S.Bottom>
        <S.GoggleBtn
          label="Sign up with Google"
          leftIcon={googleIcon}
          type="white1"
          onClick={signUpWithGoggle}
        />
        <S.FacebookBtn
          label="Sign up with Facebook"
          leftIcon={facebookIcon}
          type="white1"
          onClick={signUpWithFacebok}
        />
      </S.Bottom>
    </MainLayout>
  );
}

export default SignUp;
