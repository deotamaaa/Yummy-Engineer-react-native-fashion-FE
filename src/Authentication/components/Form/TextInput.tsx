import React, { useState } from 'react'
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
  validator: (input: string) => boolean
}
const SIZE = theme.borderRadii.m * 2
const Valid = true
const Invalid = false
const Pristine = null
type InputState = typeof Valid | typeof Invalid | typeof Pristine

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState('')
  const [state, setState] = useState<InputState>(Pristine)
  const reColor: keyof typeof theme.colors =
    state === Pristine ? 'darkGrey' : state === Valid ? 'primary' : 'danger'
  const color = theme.colors[reColor]
  const onChangeText = (text: string) => {
    setInput(text)
    if (state !== Pristine) {
      validate()
    }
  }
  const validate = () => {
    const valid = validator(input)
    setState(valid)
  }
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      marginTop="m"
    >
      <Box padding="m">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          height={SIZE}
          width={SIZE}
          backgroundColor={state === Valid ? 'primary' : 'danger'}
        >
          <Icon
            name={state === Valid ? 'check' : 'x'}
            color="white"
            size={14}
          />
        </Box>
      )}
    </Box>
  )
}

export default TextInput
