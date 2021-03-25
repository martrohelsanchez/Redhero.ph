import React, { useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box } from 'src/components';
import routes from 'src/constants/routes';
import { UserContext } from 'src/context/userContext';
import MainLayout from 'src/Layout/MainLayout';
import * as userService from 'src/services/UserService';

import * as S from './DonorSignUp.styles';

const DONOR = 'donor';
const NOT_DONOR = 'not-donor';

function DonorSignUp(props: RouteComponentProps) {
  const { history } = props;

  const user = useContext(UserContext);
  const [isDonor, setIsDonor] = useState<boolean>(true);

  async function handleNext() {
    await userService.updateUser(
      {
        isDonor: isDonor,
      },
      user?.id as string,
    );

    history.push(routes.RECOGNITION);
  }

  function handleAnswerChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === DONOR) {
      setIsDonor(true);
    }

    if (e.target.value === NOT_DONOR) {
      setIsDonor(false);
    }
  }

  return (
    <S.Wrapper>
      <MainLayout></MainLayout>
      <S.Container>
        <S.Row justifyContent="center">
          <S.Col md={6}>
            <S.CardContainer>
              <S.Card>
                <S.Heading label="36 people are about to lose their battle" type="roundHeavy1" />
                <Box margin="10px 0 20px 0">
                  <S.SubHeading label="Help them win by becoming a donor" type="textSemibold2" />
                </Box>
                <Box margin="0 0 10px 0">
                  <S.Checkbox
                    type="radio"
                    id="donor-signup"
                    value={DONOR}
                    checked={isDonor}
                    onChange={handleAnswerChange}
                  />
                  <S.Label htmlFor="donor-signup">Sign up as a donor</S.Label>
                </Box>
                <S.Checkbox
                  type="radio"
                  id="dont-want-to-help"
                  value={NOT_DONOR}
                  checked={isDonor === false}
                  onChange={handleAnswerChange}
                />
                <S.Label htmlFor="dont-want-to-help">I don't want to help</S.Label>
                <S.Bottom>
                  <S.Button
                    isDisabled={isDonor === undefined}
                    label="Next"
                    type="white1"
                    onClick={handleNext}
                  />
                </S.Bottom>
              </S.Card>
            </S.CardContainer>
          </S.Col>
        </S.Row>
      </S.Container>
    </S.Wrapper>
  );
}

export default DonorSignUp;
