import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import theme, { aspectRatio, Box } from '../../components/Theme'
import CartContainer from './CartContainer'
import Item from './Item'

const { width } = Dimensions.get('window')
const height = 100 * aspectRatio
const d = 'M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z'

const defaultItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const Cart = ({ navigation }: HomeNavigationProps<'Cart'>) => {
  const [items, setItems] = useState(defaultItems)
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
        flex={1}
        style={{
          position: 'absolute',
          top: 0,
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
        contentContainerStyle={{ paddingVertical: 50 * aspectRatio }}
        showsVerticalScrollIndicator={false}
      >
        {items.map((item, index) => (
          <Item
            key={item.id}
            onDelete={() => {
              items.splice(index, 1)
              setItems(items.concat());
            }} />
        ))}
      </ScrollView>
    </CartContainer >
  )
}

export default Cart
