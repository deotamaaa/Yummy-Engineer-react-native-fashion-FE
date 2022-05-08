import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { snapPoint, clamp } from 'react-native-redash';
import theme, { aspectRatio, Box } from '../../components/Theme';
import Checkout from './Checkout';

interface CartProps {
  children: ReactNode;
  checkoutComponent: FC<{ minHeight: number }>;
}

const height = (830 * aspectRatio) / 1.125;
const minHeight = 228 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

const Cart = ({ children }: CartProps) => {
  const translateY = useSharedValue(0);
  //@ts-ignore
  const onGestureEvent = useAnimatedGestureHandler<{ y?: number }>({
    onStart: (event, ctx) => {
      //@ts-ignore
      ctx.y = translateY.value;
    },
    onActive: ({ translationY }, ctx) => {
      //@ts-ignore
      translateY.value = clamp(
        ctx.y + translationY,
        //@ts-ignore
        snapPoints[0],
        snapPoints[1]
      );
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest, { overshootClamping: true });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Box flex={1}>
      <Checkout minHeight={minHeight} />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: height * 1,
              backgroundColor: 'white',
              overflow: 'hidden',
              borderBottomRightRadius: theme.borderRadii.xl,
              borderBottomLeftRadius: theme.borderRadii.xl,
            },
            style,
          ]}
        >
          {children}
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: theme.borderRadii.xl,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                height: 5 * aspectRatio,
                width: 60 * aspectRatio,
                borderRadius: 2.5 * aspectRatio,
                marginBottom: theme.spacing.m,
                backgroundColor: theme.colors.secondary,
              }}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Cart;
