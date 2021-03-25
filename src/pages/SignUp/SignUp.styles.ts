import styled from 'styled-components';

import { Button, Flex } from 'src/components';

export const Bottom = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 66px;
  left: 0;
  right: 0;
`;

const SignUpBtn = styled(Button)`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.text5};
`;

export const GoggleBtn = styled(SignUpBtn)`
  margin-bottom: 24px;
  color: black;
`;

export const FacebookBtn = styled(SignUpBtn)`
  color: white;
  background-color: ${(props) => props.theme.colors.fb};
`;
