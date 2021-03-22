import Back from 'mdi-react/ChevronLeftIcon';
import React from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { Box, Flex, Text } from 'src/components';
import { useHistory } from 'react-router';

type Props = {
  children?: React.ReactNode;
};

function MainLayout({ children }: Props) {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Container>
      <Row justifyContent="center">
        <Col md={6}>
          <Box margin="30px 0 0 0">
            <Flex justifyContent="space-between" alignItems="center">
              <StyledBack size={30} onClick={goBack} />
              <Text label="Redhero" type="roundHeavy3" />
              <Decoy></Decoy>
            </Flex>
          </Box>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

const StyledBack = styled(Back)`
  color: ${(props) => props.theme.colors.white1};
  cursor: pointer;
`;

const Decoy = styled.div`
  opacity: 0;
  width: 30px;
`;

export default MainLayout;
