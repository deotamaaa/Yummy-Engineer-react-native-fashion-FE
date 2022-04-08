import React from 'react'

import { Box, Text } from '../../../components/Theme'

import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

interface CheckboxProps {
  label: string
  isChecked: boolean
  onChange: (value: boolean) => void
}

const Checkbox = ({ label, onChange, isChecked }: CheckboxProps) => {
  return (
    <RectButton
      onPress={() => onChange(!isChecked)}
      style={{ justifyContent: 'center' }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          alignItems="center"
          borderRadius="s"
          backgroundColor={isChecked ? 'primary' : 'white'}
          borderWidth={1}
          borderColor="primary"
          height={20}
          justifyContent="center"
          marginRight="s"
          width={20}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="body">{label}</Text>
      </Box>
    </RectButton>
  )
}

export default Checkbox
