import React from 'react'

import { Button, Container, Text } from '../../components'
import { Box } from '../../components/Theme'
import TextInput from '../components/Form/TextInput'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Footer from '../components/Footer'
import { Routes, StackNavigationProps } from '../../components/Navigation'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
  passwordConfirm: Yup.string()
    .equals([Yup.ref('password')], "'Password didn't match!")
    .required('Required'),
})

interface FormData {
  email: string
  password: string
  passwordConfirm: string
}

const Signup = ({ navigation }: StackNavigationProps<Routes, 'Signup'>) => {
  const footer = (
    <Footer
      title="Already have an account?"
      action="Log in Here"
      onPress={() => navigation.navigate('Login')}
    />
  )

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(LoginSchema),
  })
  const onSubmit = () => true

  return (
    <Container pattern={1}{...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="s">
          Create Account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          You know what to fill.
        </Text>

        <Text variant="tagName">Email</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="email"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isTouched, error },
          }) => (
            <TextInput
              placeholder="Example@email.com"
              icon="mail"
              onChangeText={(value) => onChange(value)}
              onBlur={onBlur}
              value={value}
              error={error?.message}
              touched={isTouched}
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && <Text color="danger">{errors.email?.message}</Text>}

        {/* PASSWORD */}
        <Text variant="tagName">Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="password"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isTouched, error },
          }) => (
            <TextInput
              placeholder="Your password"
              icon="lock"
              onChangeText={(value) => onChange(value)}
              onBlur={onBlur}
              value={value}
              secureTextEntry={true}
              error={error?.message}
              touched={isTouched}
              autoCapitalize="none"
            />
          )}
        />
        {errors.password && (
          <Text color="danger">{errors.password?.message}</Text>
        )}

        {/* CONFIRM PASSWORD */}
        <Text variant="tagName">Confirm Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="passwordConfirm"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isTouched, error },
          }) => (
            <TextInput
              placeholder="Confirm Your password"
              icon="lock"
              onChangeText={(value) => onChange(value)}
              onBlur={onBlur}
              value={value}
              secureTextEntry={true}
              error={error?.message}
              touched={isTouched}
              autoCapitalize="none"
            />
          )}
        />
        {errors.password && (
          <Text color="danger">{errors.passwordConfirm?.message}</Text>
        )}
      </Box>

      <Box alignItems="center">
        <Button
          variant="primary"
          label="Create an Account"
          onPress={handleSubmit(onSubmit)}
        />
      </Box>
    </Container>
  )
}

export default Signup
