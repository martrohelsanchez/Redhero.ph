import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, Button, Text } from 'src/components';
import { BLOOD_TYPES } from 'src/constants/blood';
import routes from 'src/constants/routes';
import MainLayout from 'src/Layout/MainLayout';

import * as S from './PatientBloodType.styles';

function PatientBloodType(props: RouteComponentProps) {
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
        <Text label="The patient's blood type is" type="roundSemibold2" />
      </Box>
      <S.SelectBloodType value={bloodType} onChange={handleBloodTypeChange}>
        <S.BloodType value="">blood type</S.BloodType>
        {bloodTypes}
      </S.SelectBloodType>
      <S.Bottom>
        <Button label="Next" isDisabled={!bloodType} type="white1" onClick={next} />
      </S.Bottom>
    </MainLayout>
  );
}

export default PatientBloodType;
