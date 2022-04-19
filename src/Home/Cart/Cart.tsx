import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import theme, { aspectRatio, Box } from '../../components/Theme'
import CartContainer from './CartContainer'
import Checkout from './Checkout'
import Item from './Item'

const defaultItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const Cart = ({ navigation }: HomeNavigationProps<'Cart'>) => {
  const [items, setItems] = useState(defaultItems)
  return (
    <CartContainer checkoutComponent={<Checkout />}>
      <Box backgroundColor="primary">
        <Header
          dark
          title="SHOPPING CART"
          left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
        />
      </Box>
      <Box
        flex={1}
      >
        <ScrollView
          style={{
            borderBottomRightRadius: theme.borderRadii.xl,
            borderBottomLeftRadius: theme.borderRadii.xl,
          }}
          contentContainerStyle={{ paddingVertical: 50 * aspectRatio }}
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
      </Box>
    </CartContainer >
  )
}

export default Cart
