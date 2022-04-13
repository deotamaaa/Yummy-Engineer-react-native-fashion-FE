import { Theme } from '@react-navigation/native'
import React from 'react'
import { Dimensions } from 'react-native'
import { theme } from '../../../components'
import { Box } from '../../../components/Theme'

import Underlay from './Underlay'
import { lerp } from './Helper'

const { width: wWidth } = Dimensions.get('window')
const aspectRatio = 195 / 305

export interface DataPoint {
  date: number
  value: number
  color: keyof Theme['colors']
  id: number
}

interface GraphProps {
  data: DataPoint[]
}

const Graph = ({ data }: GraphProps) => {
  const canvasWidth = wWidth - theme.spacing.m * 3
  const canvasHeight = canvasWidth * aspectRatio

  // const width = canvasWidth - theme.spacing.xl
  // const height = canvasHeight - theme.spacing.xl

  const width = canvasWidth - 24
  const height = canvasHeight - 24

  const values = data.map((point) => point.value)
  const dates = data.map((point) => point.date)
  const step = canvasWidth / data.length

  // const minX = Math.min(...dates)
  // const maxX = Math.max(...dates)

  const minY = Math.min(...values)
  const maxY = Math.max(...values)

  return (
    <Box paddingBottom="xl" paddingLeft="m" marginTop="xl">
      <Underlay dates={dates} minY={minY} maxY={maxY} step={step} />
      <Box width={width} height={height}>
        {data.map((point, i) => {
          if (point.value === 0) {
            return null
          }
          return (
            <Box
              key={point.date}
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
      </Box>
    </Box>
  )
}

export default Graph
