import React from 'react'
import { Button, Container, Text } from '../../components'
import { Routes, StackNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'
import { Feather as Icon } from '@expo/vector-icons'
import CloseButton from '../../components/CloseButton'

const SIZE = 80
const ChangedPasswordSuccess = ({
  navigation,
}: StackNavigationProps<Routes, 'ChangedPasswordSuccess'>) => {
  return (
    <>
      <Container
        pattern={1}
        footer={
          <Box flexDirection="row" justifyContent="center">
            <CloseButton onPress={() => navigation.pop()} />
          </Box>
        }
      >
        <Box flex={1} justifyContent="center" alignItems="center">
          <Box
            backgroundColor="primary"
            style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
            justifyContent="center"
            alignItems="center"
            marginBottom='m'
          >
            <Text textAlign="center" color="white">
              <Icon name="check" size={32} />
            </Text>
          </Box>
          <Text variant="title1" textAlign="center" marginBottom="s">
            Forgot Password
          </Text>
          <Text variant="body" textAlign="center" marginBottom="l">
            Enter your email to continue.
          </Text>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Back to Login"
              onPress={() => navigation.navigate('Login')}
            />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default ChangedPasswordSuccess
