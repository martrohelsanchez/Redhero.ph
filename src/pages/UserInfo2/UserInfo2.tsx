import React, { useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import { Box, Button, Flex, Text } from 'src/components';
import { BLOOD_TYPES } from 'src/constants/blood';
import routes from 'src/constants/routes';
import MainLayout from 'src/Layout/MainLayout';

import * as S from './UserInfo2.styles';

function UserInfo2(props: RouteComponentProps) {
  const [bloodType, setBloodType] = useState('');

  function next() {
    props.history.push(routes.LOGIN_PROMPT);
  }

  const bloodTypes = BLOOD_TYPES.map((bloodType) => (
    <S.BloodType key={bloodType} value={bloodType}>
      {bloodType}
    </S.BloodType>
  ));

  function handleBloodTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setBloodType(e.target.value);
  }

  return (
    <MainLayout>
      <Box margin="71px 0 0 0">
        <Text label="Your blood type is" type="roundSemibold2" />
      </Box>
      <S.SelectBloodType value={bloodType} onChange={handleBloodTypeChange}>
        <S.BloodType value="">blood type</S.BloodType>
        {bloodTypes}
      </S.SelectBloodType>
      <Box margin="51px 0 0 0">
        <Link to={routes.DONOR_SIGN_UP}>
          <Flex>
            <Text label="I don't know my blood type" type="textRegular3" />
            <Box margin="0 0 0 15px">
              <S.ArrowForward size={19} />
            </Box>
          </Flex>
        </Link>
      </Box>
      <S.Bottom>
        <Button label="Next" isDisabled={!bloodType} type="white1" onClick={next} />
      </S.Bottom>
    </MainLayout>
  );
}

export default UserInfo2;
