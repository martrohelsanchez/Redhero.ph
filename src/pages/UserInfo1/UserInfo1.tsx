import React, { useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, Button, Text } from 'src/components';
import routes from 'src/constants/routes';
import { UserContext } from 'src/context/userContext';
import MainLayout from 'src/Layout/MainLayout';
import * as userService from 'src/services/UserService';

import * as S from './UserInfo1.styles';

function UserInfo1(props: RouteComponentProps) {
  const { history } = props;

  const user = useContext(UserContext);
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleNext() {
    userService.updateUser(
      {
        phoneNumber: phoneNumber,
      },
      user?.id as string,
    );

    history.push(routes.USER_INFO_2);
  }

  function handlePhoneNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(e.target.value);
  }

  return (
    <MainLayout>
      <Box margin="63px 0 30px 0">
        <Text label="Your phone number is" type="roundSemibold2" />
      </Box>
      <S.PhoneNumberInput
        autoComplete="anyrandomstring"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <S.Bottom>
        <Button label="Next" isDisabled={!phoneNumber} type="white1" onClick={handleNext} />
      </S.Bottom>
    </MainLayout>
  );
}

export default UserInfo1;
