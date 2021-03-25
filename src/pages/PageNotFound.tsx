import React from 'react';

import MainLayout from 'src/Layout/MainLayout';
import { Box, Text } from 'src/components';

function PageNotFound() {
  return (
    <MainLayout>
      <Box margin="50px 0 0 0">
        <Text label="Page Not Found" type="roundHeavy1" />
      </Box>
    </MainLayout>
  );
}

export default PageNotFound;
