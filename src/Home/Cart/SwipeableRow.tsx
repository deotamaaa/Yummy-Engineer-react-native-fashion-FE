import React, { ReactNode } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import { RoundedIcon, RoundedIconButton, theme } from '../../components'
import { aspectRatio, Box, Text } from '../../components/Theme'
import { LinearGradient } from 'expo-linear-gradient'

interface SwipeableRowProps {
  children?: ReactNode
  onDelete: () => void
  height?: number
}

const { width } = Dimensions.get('window')
const finalDestination = width
const snapPoints = [-85 * aspectRatio, 0, width]

const SwipeableRow = ({ children, onDelete, height }: SwipeableRowProps) => {
  const translateX = useSharedValue(0)
  //@ts-ignore
  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      //@ts-ignore
      ctx.x = translateX.value
    },
    onActive: ({ translationX }) => {
      translateX.value = translationX
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints)
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: true,
        },
        () => {
          if (dest === finalDestination) {
            runOnJS(onDelete)()
            translateX.value = 0
          }
        }
      )
    },
  })
  const style = useAnimatedStyle(() => ({
    backgroundColor: theme.colors.white,
    transform: [{ translateX: translateX.value }],
  }))

  const deleteStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 1 : 0,
  }))

  const editStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? 1 : 0,
  }))

  return (
    <View>
      <Animated.View style={[StyleSheet.absoluteFillObject, deleteStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.danger, theme.colors.white]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Box justifyContent="space-evenly" alignItems="flex-start" flex={1} padding='m'>
          <Box flexDirection='row' justifyContent='center' alignItems='center'>
            <Text variant='title3' color='white' >
              Delete
            </Text>
            <RoundedIcon
              color="white"
              name="trash-2"
              size={30}
            />
          </Box>
        </Box>
      </Animated.View>

      <Animated.View style={[StyleSheet.absoluteFillObject, editStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.lightBlue, theme.colors.white]}
          start={[1, 0.5]}
          end={[0.8, 0.5]}
        />
        <Box justifyContent="space-evenly" alignItems="flex-end" flex={1} padding='m'>
          <RoundedIconButton
            onPress={() => alert('hello')}
            color="cyan"
            name="plus"
            size={30}
            align={'flex-start'}
          />
          <RoundedIconButton
            onPress={() => alert('this is delete')}
            color="danger"
            name="minus"
            size={30}
            align={'flex-start'}
          />
        </Box>
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  )
}

export default SwipeableRow
