import React from 'react';
import { Box, FlexCenter, Text } from 'src/components';

import facebokIconImg from 'src/assets/images/facebookIcon.svg';
import googleIconImg from 'src/assets/images/googleIcon.png';
import MainLayout from 'src/Layout/MainLayout';

import * as S from './Login.styles';

function SignUp() {
  function loginWithGoggle() {}

  function loginWithFacebok() {}

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
