import React, { ReactNode } from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import theme, { Box } from './Theme'

export const assets = [require('../components/assets/patterns/1.png')]

const aspectRatio = 750 / 1125
const { width } = Dimensions.get('window')
const height = width * aspectRatio

interface ContainerProps {
  children: ReactNode
  footer: ReactNode
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets()
  return (
    <Box flex={1} backgroundColor="title">
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          borderTopLeftRadius="noRadius"
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="title" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  )
}

export default Container
