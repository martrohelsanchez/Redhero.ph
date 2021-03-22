import { createGlobalStyle } from 'styled-components';

import defaultTheme from './themes/default';

type DefaultTheme = typeof defaultTheme;

type ThemeProps = {
  theme: DefaultTheme;
};

export default createGlobalStyle<ThemeProps>`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.primaryBase};
  }

  p {
    color: ${(props) => props.theme.colors.white1};
  }
`;
