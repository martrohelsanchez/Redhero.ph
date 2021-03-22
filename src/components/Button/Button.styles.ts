import styled, { css } from 'styled-components';

type Props = {
  buttonType: 'white1';
};

export const Button = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  outline: none;
  padding: 12px 12px;
  border-radius: 9px;
  cursor: pointer;
  text-align: center;
  max-width: 326px;
  width: 90%;

  ${(props) =>
    props.buttonType === 'white1' &&
    css`
      background-color: ${(props) => props.theme.colors.white1};
      color: ${(props) => props.theme.colors.primaryBase};

      font-family: ${(props) => props.theme.fontFamilies.sfProText};
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: ${(props) => props.theme.fontSizes.text1};

      &:disabled {
        cursor: not-allowed;
        background-color: ${(props) => props.theme.colors.white1Opacity1};
      }
    `}
`;
