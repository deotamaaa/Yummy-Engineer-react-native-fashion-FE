import React from 'react'
import { Dimensions, ImageRequireSource, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  add,
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { mix, mixColor, snapPoint } from 'react-native-redash'
import { Box } from '../../components/Theme'

import { useSpring } from './Animations' // delete later

const { width: wWidth } = Dimensions.get('window')
const width = wWidth * 0.75
const height = width * (425 / 294)
const borderRadius = 24
const snapPoints = [-wWidth, 0, wWidth]

interface CardProps {
  position: Animated.Node<number>
  onSwipe: () => void
  source: ImageRequireSource
  step: number
  index: number
  aIndex: Animated.SharedValue<number>
}

const Card = ({ onSwipe, source, step, index, aIndex }: CardProps) => {
  const translateY = useSharedValue(0)
  const translateX = useSharedValue(0)
  const position = useDerivedValue(() => index * step - aIndex.value)
  const onGestureEvent = useAnimatedGestureHandler<{ x: number; y: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value
      ctx.y = translateY.value
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = translationX + ctx.x
      translateY.value = translationY + ctx.y
    },
    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(translateY.value, velocityX, snapPoints)
      translateY.value = withSpring(0, {
        velocity: velocityY,
      })
      translateX.value = withSpring(dest, {
        overshootClamping: dest === 0 ? false : true,
        restSpeedThreshold: dest === 0 ? 0.01 : 100,
        restDisplacementThreshold: dest === 0 ? 0.01 : 100,
      },
        () => dest !== 0 && onSwipe())
    },
  })

  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          position.value,
          [0, step],
          [1.2, 1],
          Extrapolate.CLAMP
        ),
      },
    ],
  }))
  const cardStyle = useAnimatedStyle(() => {
    // const translateYOffset = mix(position.value, 0, -50)
    // const translateX = useSpring({
    //   value: translation.x,
    //   velocity: velocity.x,
    //   state,
    //   snapPoints: [-wWidth, 0, wWidth],
    //   onSnap: ([x]) => x !== 0 && onSwipe(),
    // })

    // const translateY = add(
    //   translateYOffset,
    //   //@ts-ignore
    //   useSpring({
    //     value: translation.y,
    //     velocity: velocity.y,
    //     state,
    //     snapPoints: [0],
    //   })
    // )

    const scale = mix(position.value, 1, 0.9)
    return {
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale },
      ],
      backgroundColor: mixColor(position.value, '#C9E9E7', '#74BCB8'),
    }
  })
  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          //@ts-ignore
          style={[
            {
              width,
              height,
              borderRadius,

              overflow: 'hidden',
            },
            cardStyle,
          ]}
        >
          <Animated.Image
            {...{ source }}
            style={[
              {
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
              },
              imageStyle,
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  )
}

export default Card
