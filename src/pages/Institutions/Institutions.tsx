import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Text } from 'src/components';
import routes from 'src/constants/routes';
import MainLayout from 'src/Layout/MainLayout';

import * as S from './Institutions.styles';

function Institutions() {
  return (
    <MainLayout>
      <Box margin="116px 0 0 0">
        <Text label="Oops" type="roundHeavy1" />
        <Box margin="15px 0 20px 0">
          <Text label="This feature is still under construction" type="textSemibold2" />
        </Box>
        <Text
          label="This page in the future will show nearby institutions that currently has the blood you need"
          type="textSemibold2"
        />
        <Link to={routes.FIND_BLOOD}>
          <S.GoBack label="Go back" type="textRegular1" />
        </Link>
      </Box>
    </MainLayout>
  );
}

export default Institutions;
