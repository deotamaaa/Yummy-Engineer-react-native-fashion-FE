import { useTheme } from '@shopify/restyle'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { Box } from '../../components/Theme'

const { width: wWidth } = Dimensions.get('window')

interface OutfitProps {
  outfit: {
    color: string
    aspectRatio: number
    id: number
  }
  width: number
}

const Outfit = ({
  outfit: { color: backgroundColor,
    aspectRatio },
  width,
}: OutfitProps) => {
  return (
    <Box borderRadius='m'
      marginBottom='m'
      style={{ backgroundColor, width, height: width * aspectRatio }}
    ></Box>
  )
}

export default Outfit
