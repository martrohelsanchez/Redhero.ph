import styled from 'styled-components';

export const Bottom = styled.div`
  position: fixed;
  bottom: 48px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhoneNumberInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.white1};
  color: ${(props) => props.theme.colors.primaryLight1};
  font-family: ${(props) => props.theme.fontFamilies.sfProText};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.text1};
`;
