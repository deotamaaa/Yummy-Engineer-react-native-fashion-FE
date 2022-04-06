import React, { ReactNode } from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import theme, { Box } from './Theme'

export const assets = [require('../components/assets/patterns/1.png')]

const aspectRatio = 750 / 1125
const { width } = Dimensions.get('window')
const height = width * aspectRatio

interface ContainerProps {
  children: ReactNode,
  footer: ReactNode,
}

const Container = ({ children, footer }: ContainerProps) => {
  return (
    <Box flex={1} backgroundColor="title">
      <Box backgroundColor='white'>
        <Box borderBottomLeftRadius="xl" overflow='hidden' height={height * 0.61}>
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
      <Box flex={1} overflow='hidden'>
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
          borderRadius='xl'
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
      </Box>
      <Box height={200} backgroundColor='title'>
        {footer}
      </Box>
    </Box >
  )
}

export default Container
