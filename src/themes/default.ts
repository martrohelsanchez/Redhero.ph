import { rem, rgba } from 'polished';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBase: string;
      primaryLight1: string;
      white1: string;
      white1Opacity1: string;
      fb: string;
    };
    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
      desktopL: string;
    };
    fontSizes: {
      round1: string;
      round2: string;
      round3: string;
      text1: string;
      text2: string;
      text3: string;
      text4: string;
    };
    fontWeights: {
      heavy: number;
      semibold: number;
      regular: number;
    };
    fontFamilies: {
      sfProRounded: string;
      sfProText: string;
    };
  }
}

const colors = {
  primaryBase: '#E03E49',
  primaryLight1: '#FFA097',

  white1: '#F5F5F8',
  white1Opacity1: rgba('#F5F5F8', 0.63),

  fb: '#4E6CAC',
};

const fontWeights = {
  heavy: 800,
  semibold: 600,
  regular: 400,
};

const fontSizes = {
  round1: rem('65px'),
  round2: rem('27px'),
  round3: rem('23px'),
  text1: rem('27px'),
  text2: rem('19px'),
  text3: rem('17px'),
  text4: rem('21px'),
};

const fontFamilies = {
  sfProRounded: "'SF Pro Rounded', sans-serif",
  sfProText: "'SF Pro Text', sans-serif",
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '426px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const theme: DefaultTheme = {
  colors,
  device,
  fontFamilies,
  fontSizes,
  fontWeights,
};

export default theme;
