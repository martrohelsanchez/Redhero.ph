import styled, { css } from 'styled-components';

type Props = {
  type?:
    | 'roundHeavy1'
    | 'roundSemibold2'
    | 'roundHeavy3'
    | 'textRegular1'
    | 'textSemibold2'
    | 'textRegular3';
  color?: string;
};

export const Text = styled.p<Props>`
  margin: 0;
  padding: 0;
  color: ${(props) => props.color} !important;

  ${(props) =>
    props.type === 'roundHeavy1' &&
    css`
      font-family: ${(props) => props.theme.fontFamilies.sfProRounded};
      font-weight: ${(props) => props.theme.fontWeights.heavy};
      font-size: ${(props) => props.theme.fontSizes.round1};
    `}

  ${(props) =>
    props.type === 'roundSemibold2' &&
    css`
      font-family: ${(props) => props.theme.fontFamilies.sfProRounded};
      font-weight: ${(props) => props.theme.fontWeights.semibold};
      font-size: ${(props) => props.theme.fontSizes.round2};
    `}

  ${(props) =>
    props.type === 'roundHeavy3' &&
    css`
      font-family: ${(props) => props.theme.fontFamilies.sfProRounded};
      font-weight: ${(props) => props.theme.fontWeights.heavy};
      font-size: ${(props) => props.theme.fontSizes.round3};
    `}

  ${(props) =>
    props.type === 'textRegular1' &&
    css`
      font-family: ${(props) => props.theme.fontFamilies.sfProText};
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: ${(props) => props.theme.fontSizes.text1};
    `}

  ${(props) =>
    props.type === 'textSemibold2' &&
    css`
      font-family: ${(props) => props.theme.fontFamilies.sfProText};
      font-weight: ${(props) => props.theme.fontWeights.semibold};
      font-size: ${(props) => props.theme.fontSizes.text2};
    `}

  ${(props) =>
    props.type === 'textRegular3' &&
    css`
      font-family: ${(props) => props.theme.fontFamilies.sfProText};
      font-weight: ${(props) => props.theme.fontWeights.regular};
      font-size: ${(props) => props.theme.fontSizes.text3};
    `}
`;
