import React from 'react';
import styled from 'styled-components';

import { Flex, Text } from 'src/components';

import MainLayout from 'src/Layout/MainLayout';

function LoadingPage() {
  return (
    <MainLayout isBackBtnVisible={false}>
      <Loading label="Loading..." type="roundHeavy1" />
    </MainLayout>
  );
}

export const Loading = styled(Text)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Center = styled(Flex)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default LoadingPage;
