import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Container, Row } from 'styled-bootstrap-grid';

import { Box, Button, Flex, Text } from 'src/components';
import routes from 'src/constants/routes';

import * as S from './LadingPage.styles';

function LandingPage(props: RouteComponentProps) {
  function handleFindBlood() {
    props.history.push(routes.FIND_BLOOD);
  }

  return (
    <Container>
      <Row justifyContent="center">
        <Col md={6}>
          <Box margin="40px 0 0 0">
            <Text label="Redhero" type="roundHeavy1" />
          </Box>
          <S.Bottom>
            <Button label="I need blood" onClick={handleFindBlood} type="white1" />
            <Box margin="52px 0 0 0">
              <Flex flexDirection="column" alignItems="center">
                <Text label="Login" type="textRegular3" />
                <Box margin="17px 0 0 0">
                  <Text label="Create an account" type="textRegular3" />
                </Box>
              </Flex>
            </Box>
          </S.Bottom>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;