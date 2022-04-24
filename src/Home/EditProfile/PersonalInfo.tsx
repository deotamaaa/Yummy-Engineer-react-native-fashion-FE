import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView } from 'react-native-gesture-handler'
import TextInput from '../../Authentication/components/Form/TextInput'
import { Box, Text } from '../../components/Theme'

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]

interface FormData {
  firstName: string
  lastName: string
  email: string
}

const PersonalInfo = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // resolver: yupResolver(LoginSchema),
  })

  //TODO: Default value update user
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box padding="m">
        <Text variant="body" marginBottom="m">
          Account Information
        </Text>
        <Box marginBottom="m">
          <Text variant="tagName">First Name</Text>
          <Controller
            name='firstName'
            control={control}
            rules={{ required: false }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextInput
                icon="user"
                defaultValue={firstName}
                placeholder="First Name"
                autoCapitalize="none"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
              />
            )}
          />
        </Box>
        <Box marginBottom="m">
          <Text variant="tagName">Last Name</Text>
          <Controller
            name='lastName'
            control={control}
            rules={{ required: false }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              < TextInput
                icon="lock"
                defaultValue={lastName}
                placeholder="Last Name"
                autoCapitalize="none"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
              />
            )}
          />
        </Box>
        <Box marginBottom="m">
          <Text variant="tagName">Email</Text>
          <Controller
            name='email'
            control={control}
            rules={{ required: false }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              < TextInput
                icon="mail"
                placeholder="Email"
                defaultValue={email}
                autoCapitalize="none"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
              />
            )}
          />
        </Box>
        {/* <CheckboxGroup options={genders} radio /> */}
      </Box>
    </ScrollView>
  )
}

export default PersonalInfo
