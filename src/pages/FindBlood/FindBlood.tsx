import React from 'react';
import { useHistory } from 'react-router';

import MainLayout from 'src/Layout/MainLayout';
import { Button } from 'src/components';
import routes from 'src/constants/routes';

import * as S from './FindBlood.styles';

function FindBlood() {
  const history = useHistory();

  function directToInstitutions() {
    history.push(routes.FIND_INSTITUTIONS);
  }

  function directToDonors() {
    history.push(routes.PATIENT_BLOOD_TYPE);
  }

  return (
    <MainLayout>
      <S.Bottom>
        <Button label="Nearby institutions" type="white1" onClick={directToInstitutions} />
        <Button label="Nearby donors" type="white1" onClick={directToDonors} />
      </S.Bottom>
    </MainLayout>
  );
}

export default FindBlood;
