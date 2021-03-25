import Back from 'mdi-react/ChevronLeftIcon';
import React from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Link as link } from 'react-router-dom';

import { Box, Flex, Text } from 'src/components';
import { useHistory } from 'react-router';
import routes from 'src/constants/routes';

type Props = {
  className?: string;
  children?: React.ReactNode;
  isBackBtnVisible?: boolean;
};

function MainLayout(props: Props) {
  const { children, className, isBackBtnVisible } = props;

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Container className={className}>
      <Row justifyContent="center">
        <Col md={6}>
          <Box margin="30px 0 0 0">
            <Flex justifyContent="space-between" alignItems="center">
              <StyledBack isVisible={isBackBtnVisible ?? true} size={30} onClick={goBack} />
              <Link to={routes.ROOT}>
                <Text label="Redhero" type="roundHeavy3" />
              </Link>
              <Decoy></Decoy>
            </Flex>
          </Box>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

const StyledBack = styled(Back)<{ isVisible: boolean }>`
  color: ${(props) => props.theme.colors.white1};
  cursor: pointer;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

const Decoy = styled.div`
  opacity: 0;
  width: 30px;
`;

const Link = styled(link)`
  text-decoration: none;
`;

export default MainLayout;
