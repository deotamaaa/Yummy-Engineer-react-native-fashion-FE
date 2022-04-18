import React, { ReactNode } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import { theme } from '../../components'
import { aspectRatio } from '../../components/Theme'

interface SwipeableRowProps {
  children: ReactNode
}

const { width } = Dimensions.get('window')
const snapPoints = [-85 * aspectRatio, 0, width]

const SwipeableRow = ({ children }: SwipeableRowProps) => {
  const translateX = useSharedValue(0)
  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value
    },
    onActive: ({ translationX }) => {
      translateX.value = translationX
    },
    onEnd: ({ velocityX }) => {
      translateX.value = withSpring(snapPoint(translateX.value, velocityX, snapPoints), {
        overshootClamping: true
      })

    }
  })
  const style = useAnimatedStyle(() => ({
    backgroundColor: theme.colors.white,
    transform: [{ translateX: translateX.value }],
  }))
  return (
    <View>
      <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'red' }} />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

export default SwipeableRow