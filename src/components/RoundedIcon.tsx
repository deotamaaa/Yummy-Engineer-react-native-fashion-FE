import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { Box, Text, Theme } from './Theme'

interface RoundedIconProps {
  name: string
  size: number
  color: keyof Theme['colors']
  backgroundColor: keyof Theme['colors']
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.8
  return (
    <Box
      borderRadius="m"
      justifyContent="center"
      alignItems="center"
      height={size}
      width={size}
      marginRight="m"
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon
          name={!error ? 'check' : 'x'}
          color="white"
          size={iconSize}
          {...{ name }}
        />
      </Text>
    </Box>
  )
}

export default RoundedIcon
