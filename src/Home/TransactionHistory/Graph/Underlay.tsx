import React from 'react'
import { StyleSheet } from 'react-native'
import theme, { Box, Text } from '../../../components/Theme'
import 'intl'
import 'intl/locale-data/jsonp/en'
import { lerp } from './Helper'

const formatter = Intl.DateTimeFormat('en', { month: 'short' })

interface UnderlayProps {
  dates: number[]
  minY: number
  maxY: number
  step: number
}

const Underlay = ({ dates, minY, maxY, step }: UnderlayProps) => {
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1}>
        {[0, 0.33, 0.66, 1].map((t) => {
          return (
            <Box key={t} flexDirection="row" alignItems="center">
              <Box width={theme.spacing.xl} paddingRight='s'>
                <Text color="darkGrey" textAlign='left'>
                  {Math.round(lerp(minY, maxY, t))}
                </Text>
              </Box>
              <Box flex={1} height={1} backgroundColor="darkGrey" />
            </Box>
          )
        })}
      </Box>
      <Box marginLeft="s" height={theme.spacing.l} flexDirection="row">
        {dates.map((date, index) => (
          <Box width={step}>
            <Text key={index} color="darkGrey" textAlign="center">
              {formatter.format(new Date(date))}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Underlay
