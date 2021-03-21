import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBase: string;
      white1: string;
    };
  }
}

const colors = {
  primaryBase: '#E03E49',

  white1: '#F5F5F8',
};

const theme: DefaultTheme = {
  colors,
};

export default theme;
