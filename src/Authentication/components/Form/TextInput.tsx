import React from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'
import theme, { Box } from '../../../components/Theme'
import { Feather as Icon } from '@expo/vector-icons'

interface TextInputProps extends RNTextInputProps {
  placeholder: string
  icon: string
  touched?: boolean
  error?: string
}
const SIZE = theme.borderRadii.m * 2

const TextInput = ({ icon, placeholder, touched, error, ...props }: TextInputProps) => {
  const reColor = !touched ? "black" : (error ? "danger" : "primary")
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
          placeholderTextColor='#999'
          {...props}
        />
      </Box>
      {
        (touched) && (
          <Box
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
            height={SIZE}
            width={SIZE}
            backgroundColor={!error ? 'primary' : 'danger'}
          >
            <Icon
              name={!error ? 'check' : 'x'}
              color="white"
              size={14}
            />
          </Box>
        )
      }
    </Box >
  )
}

export default TextInput
