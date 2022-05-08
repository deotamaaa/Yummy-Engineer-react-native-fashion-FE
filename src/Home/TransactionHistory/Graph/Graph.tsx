import React from 'react';
import { Dimensions, View } from 'react-native';
import { theme } from '../../../components';
import { Box, Theme } from '../../../components/Theme';

import Underlay from './Underlay';
import { lerp } from './Helper';
import moment from 'moment';
import Animated, {
  divide,
  multiply,
  sub,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useTiming } from 'react-native-redash';
// import { useTransition } from 'react-native-redash'

const { width: wWidth } = Dimensions.get('window');
const aspectRatio = 195 / 305;
const AnimatedBox = Animated.createAnimatedComponent(Box);

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme['colors'];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const isFocused = useIsFocused();
  // const transition = useTiming(isFocused, { duration: 650 })
  const transition = useSharedValue(0);

  useFocusEffect(() => {
    transition.value = withTiming(1, { duration: 650 });
    return () => (transition.value = 0);
  });
  const canvasWidth = wWidth - theme.spacing.m * 3;
  const canvasHeight = canvasWidth * aspectRatio;

  const width = canvasWidth - 24;
  const height = canvasHeight - 24;

  const values = data.map((point) => point.value);
  const dates = data.map((point) => point.date);
  const step = canvasWidth / numberOfMonths;

  const minY = Math.min(...values);
  const maxY = Math.max(...values);

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
      <View style={{ width, height }}>
        {data.map((point) => {
          const i = Math.round(
            moment
              .duration(moment(point.date).diff(moment(startDate)))
              .asMonths()
          );
          if (point.value === 0) {
            return null;
          }
          const totalHeight = lerp(0, height, point.value / maxY);
          const style = useAnimatedStyle(() => {
            const currentHeight = totalHeight * transition.value;
            const translateY = (totalHeight - currentHeight) / 2;
            return {
              transform: [{ translateY }, { scaleY: transition.value }],
            };
          });

          return (
            <AnimatedBox
              key={point.id}
              position="absolute"
              left={i * step}
              width={step}
              height={lerp(0, height, point.value / maxY)}
              bottom={0}
              style={style}
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
            </AnimatedBox>
          );
        })}
      </View>
    </Box>
  );
};

export default Graph;
