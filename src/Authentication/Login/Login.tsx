import React from 'react'

import { Button, Container, Text } from '../../components'
import { Box } from '../../components/Theme'
import TextInput from '../components/Form/TextInput'
import Checkbox from '../components/Form/Checkbox'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Footer from '../components/Footer'
import { Routes, StackNavigationProps } from '../../components/Navigation'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
})

interface FormData {
  email: string
  password: string
  remember: boolean
}

const Login = ({ navigation }: StackNavigationProps<Routes, 'Login'>) => {
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up Here"
      onPress={() => navigation.navigate('Signup')}
    />
  )

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: yupResolver(LoginSchema),
  })
  const onSubmit = navigation.navigate('Home')

  return (
    <Container pattern={0}{...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="s">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Input your credential below to continue.
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

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="remember"
          render={({ field: { value } }) => (
            <Box flexDirection="row" justifyContent="space-between">
              <Checkbox
                label="Remember me"
                isChecked={value}
                onChange={(value) => setValue('remember', value)}
              />
              <Button
                onPress={() => navigation.navigate('ForgotPassword')}
                variant="transparent"
              >
                <Text color="primary">Forgot Password?</Text>
              </Button>
            </Box>
          )}
        ></Controller>
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
