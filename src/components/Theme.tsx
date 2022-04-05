import { createText, createTheme } from '@shopify/restyle'

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};


const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 70,
      lineHeight: 80,
      fontFamily: 'SFProText-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProText-SemiBold',
      color: "#0c0d34"
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProText-SemiBold',
      color: "#0c0d34"
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-SemiBold',
      color: "rgba(12,13,52, 0.7)"
    }
  },
  breakpoints: {}
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;