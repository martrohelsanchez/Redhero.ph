import React from 'react';
import { Box, FlexCenter, Text } from 'src/components';

import facebokIconImg from 'src/assets/images/facebookIcon.svg';
import googleIconImg from 'src/assets/images/googleIcon.png';
import MainLayout from 'src/Layout/MainLayout';

import * as S from './SignUp.styles';

function SignUp() {
  function signUpWithGoggle() {}

  function signUpWithFacebok() {}

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
          label="Sign up with Facebok"
          leftIcon={facebookIcon}
          type="white1"
          onClick={signUpWithFacebok}
        />
      </S.Bottom>
    </MainLayout>
  );
}

export default SignUp;
