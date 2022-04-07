import React from 'react'

import SocialIcon from '../components/SocialIcon'
import { Button, Container, Text } from '../../components'
import { Box } from '../../components/Theme'
import TextInput from '../components/Form/TextInput'
import Checkbox from '../components/Form/Checkbox'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too short')
    .required('Required'),
})

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const footer = (
    <>
      <SocialIcon />
      <Box alignItems="center">
        <Button
          label=""
          variant="transparent"
          onPress={() => alert('Pressed!')}
        >
          <Box flexDirection="row" justifyContent="center">
            <Text color="white">Don't have an account?</Text>
            <Text color="primary" marginLeft="s">
              Sign Up Here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  )

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginSchema),
  })
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="s">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom='l'>
          Input your credential below to continue.
        </Text>

        <Text variant="tagName">Email</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Example@email.com"
              icon="mail"
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.email && <Text color="danger">{errors.email?.message}</Text>}



        <Text variant="tagName">Password</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Your password"
              icon="lock"
              onChangeText={value => onChange(value)}
              onBlur={onBlur}
              value={value}
              secureTextEntry={true}
            />
          )}
        />
        {errors.password && (
          <Text color="danger">{errors.password?.message}</Text>
        )}

        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Button onPress={() => null} variant="transparent">
            <Text color="primary">Forgot Password?</Text>
          </Button>
        </Box>
      </Box>

      <Box alignItems="center">
        <Button
          variant="primary"
          label="Log in"
          onPress={handleSubmit(onSubmit)}
        />
      </Box>
    </Container>
  )
}

export default Login
