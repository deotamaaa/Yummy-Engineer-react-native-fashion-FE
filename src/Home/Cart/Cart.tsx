import React from 'react'
import { Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import theme, { Box } from '../../components/Theme'

const { width } = Dimensions.get('window');
const height = (682 * width) / 375;

const Cart = () => {
  return (
    <Box flex={1} backgroundColor="secondary">
      <PanGestureHandler      >
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: 'white',
              borderBottomRightRadius: theme.borderRadii.xl,
              borderBottomLeftRadius: theme.borderRadii.xl,
            },
            // style,
          ]}
        />
      </PanGestureHandler>
    </Box>
  )
}

export default Cart