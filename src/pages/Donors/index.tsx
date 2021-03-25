import React from 'react';
import { Box, Text } from 'src/components';

import MainLayout from 'src/Layout/MainLayout';

import Donor from './components/Donor';

const users = [
  {
    displayName: 'Ashley Del Mundo',
    photoURL:
      'https://firebasestorage.googleapis.com/v0/b/fir-playground-65495.appspot.com/o/ashley.png?alt=media&token=df35fb9c-13c2-4762-8eaa-bab9610e2412',
  },
  {
    displayName: 'Barbie Forteza',
    photoURL:
      'https://firebasestorage.googleapis.com/v0/b/fir-playground-65495.appspot.com/o/barbie.png?alt=media&token=04f83902-1fdd-4e3c-b898-8ea8f6a6a359',
  },
];

function Donors() {
  const renderUsers = users.map((user) => (
    <Donor key={user.displayName} displayName={user.displayName} photoURL={user.photoURL} />
  ));

  return (
    <MainLayout>
      <Box margin="48px 0 0 0">
        <Text label="Donors in your area" type="roundHeavy1" />
      </Box>
      <Box margin="54px 0 0 0">{renderUsers}</Box>
    </MainLayout>
  );
}

export default Donors;
