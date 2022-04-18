import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Svg, { Path } from 'react-native-svg'
import { Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import theme, { aspectRatio, Box, Text } from '../../components/Theme'
import CartContainer from './CartContainer'
import Item from './Item'

const { width } = Dimensions.get('window')
const height = 100 * aspectRatio
const d = 'M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z'

const Cart = ({ navigation }: HomeNavigationProps<'Cart'>) => {
  return (
    <CartContainer>
      <Box>
        <Box backgroundColor="primary">
          <Header
            dark
            title="SHOPPING CART"
            left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
          />
        </Box>
      </Box>
      <Box
        style={{
          position: 'absolute',
          bottom: -height,
          left: 0,
          right: 0,
          height,
        }}
      >
      </Box>
      <ScrollView
        style={{
          borderBottomRightRadius: theme.borderRadii.xl,
          borderBottomLeftRadius: theme.borderRadii.xl,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ScrollView>
    </CartContainer >
  )
}

export default Cart
