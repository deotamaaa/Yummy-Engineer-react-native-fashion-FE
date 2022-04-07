import React from 'react'

import SocialIcon from '../components/SocialIcon'
import { Button, Container, Text } from '../../components'
import { Box } from '../../components/Theme'
import TextInput from '../components/Form/TextInput'
import Checkbox from '../components/Form/Checkbox'

import { useForm } from 'react-hook-form'

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
          Input your credential below to continue.
        </Text>

        <Text variant="tagName">Email</Text>
        <TextInput placeholder="Example@email.com" icon="mail" />

        <Text variant="tagName">Password</Text>
        <TextInput placeholder="Your password" icon="lock" />

        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
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
