import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { Button } from '../../components'
import { AuthNavigationProps } from '../../components/Navigation'
import theme, { Box, Text } from '../../components/Theme'

const { width } = Dimensions.get('window')
const picture = {
  src: require('../../../assets/5.png'),
  width: 3383,
  height: 5074,
}
export const assets = [picture.src]

const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="slideGrey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={[
            styles.picture,
            {
              width: width - theme.borderRadii.xl,
              height:
                ((width - theme.borderRadii.xl) * picture.height) /
                picture.width,
            },
          ]}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="slideGrey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
          borderTopLeftRadius="xl"
          flex={1}
        >
          <Text variant="title1">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account or signup for the first time!
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            label="Create account, it's free!"
            onPress={() => navigation.navigate('Signup')}
          />
          <Button
            variant="transparent"
            label="Forgot Password?"
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </Box>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  picture: {
    borderBottomRightRadius: 29,
  },
})

export default Welcome
