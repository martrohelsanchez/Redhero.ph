import React from 'react';
import { Box, Button, Text } from 'src/components';

import MainLayout from 'src/Layout/MainLayout';

import * as S from './styles';

function Recognition() {
  function findDonor() {}

  return (
    <MainLayout>
      <Box margin="41px 0 0 0">
        <Text label="You're now officially a redhero, captain" type="roundHeavy1" />
      </Box>
      <S.Ul>
        <S.List>You will now show on the list of donors</S.List>
        <S.List>We'll notify you if someone messaged you</S.List>
      </S.Ul>
      <S.Bottom>
        <Button label="Find donor" type="white1" onClick={findDonor} />
      </S.Bottom>
    </MainLayout>
  );
}

export default Recognition;
