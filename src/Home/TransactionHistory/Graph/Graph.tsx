import React, { useLayoutEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import { theme } from '../../../components'
import { Box, Theme } from '../../../components/Theme'

import Underlay from './Underlay'
import { lerp } from './Helper'
import moment from 'moment'
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated'

const { width: wWidth } = Dimensions.get('window')
const aspectRatio = 195 / 305
const transition = (
  <Transition.Together>
    <Transition.In
      type="slide-bottom"
      durationMs={650}
      interpolation="easeInOut"
    />
  </Transition.Together>
)

export interface DataPoint {
  date: number
  value: number
  color: keyof Theme['colors']
  id: number
}

interface GraphProps {
  data: DataPoint[]
  startDate: number
  numberOfMonths: number
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const ref = useRef<TransitioningView>(null)

  const canvasWidth = wWidth - theme.spacing.m * 3
  const canvasHeight = canvasWidth * aspectRatio

  const width = canvasWidth - 24
  const height = canvasHeight - 24

  const values = data.map((point) => point.value)
  const dates = data.map((point) => point.date)
  const step = canvasWidth / numberOfMonths

  const minY = Math.min(...values)
  const maxY = Math.max(...values)

  useLayoutEffect(() => {
    ref.current?.animateNextTransition()
  }, [])

  return (
    <Box paddingBottom="xl" paddingLeft="l" marginTop="xl">
      <Underlay
        dates={dates}
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />
      <Transitioning.View
        style={{ width, height }}
        ref={ref}
        transition={transition}
      >
        {data.map((point) => {
          const i = Math.round(
            moment
              .duration(moment(point.date).diff(moment(startDate)))
              .asMonths()
          )
          return (
            <Box
              key={point.id}
              position="absolute"
              left={i * step}
              width={step}
              height={lerp(0, height, point.value / maxY)}
              bottom={0}
            >
              <Box
                backgroundColor={point.color}
                position="absolute"
                opacity={0.1}
                top={0}
                bottom={0}
                borderTopLeftRadius="l"
                borderTopRightRadius="l"
                left={theme.spacing.m}
                right={theme.spacing.m}
              />
              <Box
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius="m"
              />
            </Box>
          )
        })}
      </Transitioning.View>
    </Box>
  )
}

export default Graph
