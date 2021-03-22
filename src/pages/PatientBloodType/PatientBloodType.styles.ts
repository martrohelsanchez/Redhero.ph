import styled from 'styled-components';

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 55px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const SelectBloodType = styled.select`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin-top: 35px;
  border: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.white1};
  padding-bottom: 5px;

  color: ${(props) => props.theme.colors.primaryLight1};
  font-family: ${(props) => props.theme.fontFamilies.sfProText};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: ${(props) => props.theme.fontSizes.text1};
`;

export const BloodType = styled.option`
  background-color: ${(props) => props.theme.colors.white1Opacity1};
  color: ${(props) => props.theme.colors.primaryBase};
  padding-left: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryBase};
  }
`;
