import { createBox, createText, createTheme, useTheme } from '@shopify/restyle'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

const theme = createTheme({
  colors: {
    primary: '#2cb9b0',
    primaryLight: '#E7F9F7',
    black: '#000',
    title: '#0c0d34',
    body: 'rgba(12,13,52, 0.7)',
    danger: 'red',
    button: '#0c0d34',
    white: 'white',
    slideGrey: 'rgba(12,13,52, 0.05)',
    lightGrey: '#FAFAFA',
    darkGrey: '#8a8d90',
    secondary: '#0C0D34',
    cyan: '#2CB9B0',
    lightCyan: '#E7F9F7',
    darkBlue: '#0C0D34',
    orange: '#FE5E33',
    yellow: '#FFC641',
    pink: '#FF87A2',
    darkPink: '#FF0058',
    violet: '#442CB9',
    lightBlue: '#BFEAF5',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    noRadius: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 60,
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
      color: 'title',
    },
    title3: {
      fontSize: 16,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'body',
    },
    tagName: {
      fontSize: 16,
      fontFamily: 'SFProText-Bold',
      color: 'black',
    },
    button: {
      fontSize: 16,
      fontFamily: 'SFProText-Regular',
      color: 'black',
      textAlign: "center"
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProText-Semibold",
      color: 'secondary',
    }
  },
  breakpoints: {},
})

export type Theme = typeof theme
export const Box = createBox<Theme>()
export const Text = createText<Theme>()
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
    () => {
      const currentTheme = useTheme();
      return styles(currentTheme);
    };
export default theme
