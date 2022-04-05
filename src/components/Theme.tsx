import { createBox, createText, createTheme } from '@shopify/restyle'

const theme = createTheme({
  colors: {
    primary: '#2cb9b0',
    title: '#0c0d34',
    body: 'rgba(12,13,52, 0.7)',
    white: "white",
    slideGrey: "#f4f0ef",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
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
      fontFamily: 'SFProText-Semibold',
      color: 'title',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      color: "title"
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: "body"
    }
  },
  breakpoints: {}
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;