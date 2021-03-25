import React from 'react';

import { Box, Text } from 'src/components';
import MainLayout from 'src/Layout/MainLayout';

function Messages() {
  return (
    <MainLayout>
      <Box margin="24px 0 0 0">
        <Text label="Messages" type="roundHeavy1" />
      </Box>
    </MainLayout>
  );
}

export default Messages;
