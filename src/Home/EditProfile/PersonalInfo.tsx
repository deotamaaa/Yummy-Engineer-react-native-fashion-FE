import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import TextInput from '../../Authentication/components/Form/TextInput'
import { Box, Text } from '../../components/Theme'
import CheckboxGroup from './CheckboxGroup'

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

const PersonalInfo = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box padding="m">
        <Text variant="body" marginBottom="m">
          Account Information
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="user"
            placeholder="Name"
            autoCompleteType="email"
            autoCapitalize="none"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Enter your Password"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="map-pin"
            placeholder="Address"
            autoCapitalize="none"
            autoCompleteType="street-address"
          />
        </Box>
        <CheckboxGroup options={genders} radio />
      </Box>
    </ScrollView>
  )
}

export default PersonalInfo
