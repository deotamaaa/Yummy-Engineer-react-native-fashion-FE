import React from 'react'
import { Button, Container, RoundedIconButton, Text } from '../../components'
import { AuthNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'
import { Feather as Icon } from '@expo/vector-icons'

const SIZE = 80
const ChangedPasswordSuccess = ({
  navigation,
}: AuthNavigationProps<'ChangedPasswordSuccess'>) => {
  return (
    <>
      <Container
        pattern={1}
        footer={
          <Box flexDirection="row" justifyContent="center">
            <RoundedIconButton
              backgroundColor="white"
              color="black"
              name="x"
              size={60}
              onPress={() => navigation.pop()}
            />
          </Box>
        }
      >
        <Box flex={1} justifyContent="center" alignItems="center">
          <Box
            backgroundColor="primary"
            style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
            justifyContent="center"
            alignItems="center"
            marginBottom="m"
          >
            <Text textAlign="center" color="white">
              <Icon name="check" size={32} />
            </Text>
          </Box>
          <Text variant="title1" textAlign="center" marginBottom="s">
            Your password was succesfully changed
          </Text>
          <Text variant="body" textAlign="center" marginBottom="l">
            Go back to login screen
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
