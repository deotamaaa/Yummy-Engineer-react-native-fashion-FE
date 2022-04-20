import { useTheme } from '@shopify/restyle'
import React, { ReactNode } from 'react'
import { Text, StyleSheet } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Theme } from './Theme'

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 15,
  },
})
interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent'
  label?: string
  onPress: () => void
  children?: ReactNode
  style?: RectButtonProps['style']
}

const Button = ({ variant, label, onPress, children, style }: ButtonProps) => {
  const theme = useTheme<Theme>()
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
        ? 'transparent'
        : theme.colors.slideGrey
  const color = variant === 'primary' ? theme.colors.white : theme.colors.button
  return (
    <RectButton
      style={[styles.container, style, { backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.label, { color }]}>{label}</Text>
      )}
    </RectButton>
  )
}

Button.defaultProps = { variant: 'default' }
export default Button
