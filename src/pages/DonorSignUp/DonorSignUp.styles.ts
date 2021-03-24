import { rem, rgba } from 'polished';
import styled from 'styled-components';
import { Container as container, Col as col, Row as row } from 'styled-bootstrap-grid';

import { Flex, FlexCenter, Text as text, Button as button } from 'src/components';

export const Li = styled.li`
  font-family: ${(props) => props.theme.fontFamilies.sfProText};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${rem('23px')};
  color: ${(props) => props.theme.colors.white1};
  margin-bottom: 15px;
`;

export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
  color: ${(props) => props.theme.colors.primaryBase};
  cursor: pointer;
  transform: scale(0.8);
`;

export const Label = styled.label`
  font-family: ${(props) => props.theme.fontFamilies.sfProText};
  color: ${(props) => props.theme.colors.primaryBase};
  font-size: ${rem('25px')};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  cursor: pointer;
`;

export const Card = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.white1};
  border-radius: 9px;
  width: 96%;
  height: 94%;
  padding: 20px;
`;

export const Container = styled(container)`
  height: 100%;
`;

export const Row = styled(row)`
  height: 100%;
`;

export const Col = styled(col)`
  height: 100%;
`;

export const CardContainer = styled(FlexCenter)`
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Text = styled(text)`
  color: ${(props) => props.theme.colors.primaryBase};
`;

export const Heading = styled(text)`
  color: ${(props) => props.theme.colors.primaryBase};
  font-size: ${rem('55px')};
`;

export const SubHeading = styled(text)`
  color: ${(props) => props.theme.colors.primaryBase};
  font-size: ${rem('30px')};
`;

export const Button = styled(button)`
  background-color: ${(props) => props.theme.colors.primaryBase};
  color: ${(props) => props.theme.colors.white1};

  &:disabled {
    background-color: ${(props) => rgba(props.theme.colors.primaryBase, 0.7)};
  }
`;

export const Bottom = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 48px;
  left: 0;
  right: 0;
`;

export const ChoicesContainer = styled.div`
  width: 100%;
  padding: 0 0 20px 10px;

  & label {
    font-size: ${rem('25px')};
  }
`;
