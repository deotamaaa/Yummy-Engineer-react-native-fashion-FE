import React from 'react'

import { Button, Container, Text } from '../../components'
import { Box } from '../../components/Theme'
import TextInput from '../components/Form/TextInput'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Footer from '../components/Footer'
import { AuthNavigationProps } from '../../components/Navigation'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

const LoginSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required').min(6, 'Too short'),
  passwordConfirm: Yup.string()
    .equals([Yup.ref('password')], "'Password didn't match!")
    .required('Required'),
})

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

const Signup = ({ navigation }: AuthNavigationProps<'Signup'>) => {
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
    resolver: yupResolver(LoginSchema),
  })

  //TODO: Add validate email exist
  const onSubmit = async (data: FormData) => {
    await axios.post('register', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    }).then((res) => {
      if (res.status !== 200) {
        console.log(res)
      } else {
      }
    })
    console.log(data, 'success register user')
  }
  return (
    <Container pattern={1} {...{ footer }}>
      <Box paddingHorizontal='xl' paddingTop='xl' >
        <Text variant="title1" textAlign="center" marginBottom="s">
          Create Account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          You know what to fill.
        </Text>
      </Box>
      <ScrollView>
        <Box paddingHorizontal='xl' paddingTop='l'>

          <Text variant="tagName">First Name</Text>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: true,
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isTouched, error },
            }) => (
              <TextInput
                placeholder="Jhon"
                icon="user"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
                touched={isTouched}
                autoCapitalize="none"
              />
            )}
          />
          {errors.firstName && <Text color="danger">{errors.firstName?.message}</Text>}

          <Text variant="tagName">Last Name</Text>
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: true,
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isTouched, error },
            }) => (
              <TextInput
                placeholder="Doe"
                icon="user"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
                touched={isTouched}
                autoCapitalize="none"
              />
            )}
          />
          {errors.lastName && <Text color="danger">{errors.lastName?.message}</Text>}

          {/* Email */}
          <Text variant="tagName">Email</Text>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
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
            name="password"
            control={control}
            rules={{
              required: true,
            }}
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
            name="passwordConfirm"
            control={control}
            rules={{
              required: true,
            }}
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
          <Box paddingVertical='m' alignItems="center">
            <Button
              variant="primary"
              label="Create an Account"
              onPress={handleSubmit(onSubmit)}
              style={undefined} />
          </Box>
        </Box>
      </ScrollView>
    </Container >
  )
}

export default Signup
