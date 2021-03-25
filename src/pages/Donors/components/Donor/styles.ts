import styled from 'styled-components';

import { Flex, Text } from 'src/components';

export const Card = styled(Flex)`
  align-items: center;
  padding: 14px 19px;
  background-color: ${(props) => props.theme.colors.white1};
  border-radius: 9px;
  margin-bottom: 19px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const UserPhoto = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primaryLight1};
  margin-right: 13px;
`;

export const UserName = styled(Text)`
  color: black;
`;
