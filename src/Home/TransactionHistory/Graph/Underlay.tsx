import React from 'react'
import { StyleSheet } from 'react-native'
import theme, { Box, Text } from '../../../components/Theme'

import 'intl'
import 'intl/locale-data/jsonp/en'

import { lerp } from './Helper'
import moment from 'moment'

const ROW_HEIGHT = 30

interface UnderlayProps {
  dates: number[]
  minY: number
  maxY: number
  step: number
  startDate: number;
  numberOfMonths: number;
}

const Underlay = ({ minY, maxY, step, startDate, numberOfMonths, }: UnderlayProps) => {
  const minDate = moment(startDate);
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => {
          return (
            <Box
              key={t}
              flexDirection="row"
              alignItems="center"
              height={ROW_HEIGHT}
              style={{ zIndex: -1, top: t === 0 ? 8 : t === 1 ? -8 : 0 }}
            >
              <Box width={theme.spacing.xl} paddingRight='s'>
                <Text color="darkGrey">
                  {Math.round(lerp(minY, maxY, t))}
                </Text>
              </Box>
              <Box flex={1} height={1} backgroundColor="darkGrey" opacity={0.3} />
            </Box>
          )
        })}
      </Box>
      <Box marginLeft="m" marginTop='s' height={theme.spacing.l} flexDirection="row">
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, 'month'))
          .map((date, index) => (
            <Box width={step} key={index}>
              <Text textAlign="center">{date.format('MMM')}</Text>
            </Box>
          ))}
      </Box>
    </Box>
  )
}

export default Underlay
