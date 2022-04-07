import React from 'react'

import SocialIcon from '../components/SocialIcon'
import { Button, Container, Text } from '../../components'
import { Box } from '../../components/Theme'
import TextInput from '../components/Form/TextInput'
import Checkbox from '../components/Form/Checkbox'

const emailValidator = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
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
  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="m">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center">
          Use credential below to login
        </Text>
        <TextInput
          placeholder="Enter your Email"
          icon="mail"
          validator={emailValidator}
        />
        <TextInput
          placeholder="Enter your password"
          icon="lock"
          validator={(password: string) => password.length > 5}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="remember me" />
          <Button onPress={() => null} variant="transparent">
            <Text color="primary">Forgot Password?</Text>
          </Button>
        </Box>
      </Box>
      <Box alignItems="center">
        <Button variant="primary" label="Log in" onPress={() => null} />
      </Box>
    </Container>
  )
}

export default Login
