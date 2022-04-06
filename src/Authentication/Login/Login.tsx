import React from 'react'
import { View } from 'react-native'

import SocialIcon from '../components/SocialIcon'
import { Button, Container, Text } from '../../components'
import { Box } from '../../components/Theme'

const Login = () => {
  const footer = (
    <>
      <SocialIcon />
      <Box alignItems="center">
        <Button label="" variant="transparent" onPress={() => alert("Pressed!")}>
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
      <View />
    </Container>
  )
}

export default Login
