import { rem } from 'polished';
import styled from 'styled-components';

import { Flex } from 'src/components';

export const Bottom = styled(Flex)`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 55px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const List = styled.li`
  list-style-type: disc;
  font-family: ${(props) => props.theme.fontFamilies.sfProText};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${rem('23px')};
  color: ${(props) => props.theme.colors.white1};
  margin-bottom: 15px;
`;

export const Ul = styled.ul`
  list-style-type: disc;
  padding-left: 25px;
  margin-top: 36px;
`;
