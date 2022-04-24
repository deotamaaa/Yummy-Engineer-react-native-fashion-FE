import React from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'
import theme, { Box } from '../../../components/Theme'
import { Feather as Icon } from '@expo/vector-icons'
import { RoundedIcon } from '../../../components'

interface TextInputProps extends RNTextInputProps {
  placeholder: string
  icon: string
  touched?: boolean
  error?: string
}
const SIZE = theme.borderRadii.m * 2

const TextInput = ({
  icon,
  placeholder,
  touched,
  error,
  ...props
}: TextInputProps) => {
  const reColor = !touched ? 'black' : error ? 'danger' : 'primary'
  const color = theme.colors[reColor]
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      marginTop="s"
      marginBottom="s"
    >
      <Box padding="m">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          placeholderTextColor="#999"
          {...props}
        />
      </Box>
      {touched === true && (
        <RoundedIcon
          name={!error ? 'check' : 'x'}
          size={SIZE}
          backgroundColor={!error ? 'primary' : 'danger'}
          color="white"
        />
      )}
    </Box>
  )
}

export default TextInput
