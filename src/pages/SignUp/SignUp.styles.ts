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

export const GoggleBtn = styled(Button)`
  margin-bottom: 24px;
  color: black;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.text4};
`;

export const FacebookBtn = styled(Button)`
  color: white;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.text4};
  background-color: ${(props) => props.theme.colors.fb};
`;

export const GoggleIcon = styled.img``;
