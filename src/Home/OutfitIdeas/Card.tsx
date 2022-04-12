import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { add } from 'react-native-reanimated'
import {
  mix,
  mixColor,
  usePanGestureHandler,
} from 'react-native-redash'
import { Box } from '../../components/Theme'

import { useSpring } from './Animations'

const { width: wWidth } = Dimensions.get('window')
const width = wWidth * 0.75
const height = width * (425 / 294)
const borderRadius = 24

interface CardProps {
  position: Animated.Node<number>
  onSwipe: () => void
}

const Card = ({ position, onSwipe }: CardProps) => {
  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler()
  const backgroundColor = mixColor(position, '#C9E9E7', '#74BCB8')
  const translateYOffset = mix(position, 0, -45)
  const scale = mix(position, 1, 0.95)
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 ?? onSwipe(),
  })
  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  )
  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateX }, { translateY }, { scale }],
          }}
        />
      </PanGestureHandler>
    </Box>
  )
}

export default Card
