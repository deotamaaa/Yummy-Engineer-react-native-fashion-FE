import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Header from '../../components/Header'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'

import OutfitCard from './OutfitCard'

export const catalog = [
  {
    id: 1,
    name: 'Bomber',
    brand: 'H&M',
    size: ['Test Size'],
    price: '$100',
    image:
      'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b9e72b5c08407ad53bb0ab71a65f2db48e476c31_xxl-1.jpg',
  },
  {
    id: 2,
    name: 'Bomber',
    brand: 'H&M',
    size: ['Test Size'],
    price: '$100',
    image:
      'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b9e72b5c08407ad53bb0ab71a65f2db48e476c31_xxl-1.jpg',
  },
  {
    id: 3,
    name: 'Bomber',
    brand: 'H&M',
    size: ['Test Size'],
    price: '$100',
    image:
      'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b9e72b5c08407ad53bb0ab71a65f2db48e476c31_xxl-1.jpg',
  },
  {
    id: 4,
    name: 'Bomber',
    brand: 'H&M',
    size: ['Test Size'],
    price: '$100',
    image:
      'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b9e72b5c08407ad53bb0ab71a65f2db48e476c31_xxl-1.jpg',
  },
  {
    id: 5,
    name: 'Bomber',
    brand: 'H&M',
    size: ['Test Size'],
    price: '$100',
    image:
      'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b9e72b5c08407ad53bb0ab71a65f2db48e476c31_xxl-1.jpg',
  },
  {
    id: 6,
    name: 'Bomber',
    brand: 'H&M',
    size: ['Test Size'],
    price: '$100',
    image:
      'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b9e72b5c08407ad53bb0ab71a65f2db48e476c31_xxl-1.jpg',
  },
]

const OutfitCatalog = ({
  navigation,
}: HomeNavigationProps<'OutfitCatalog'>) => {
  const [catalogItems, _] = useState(catalog)
  return (
    <Box flex={1} >
      <Header
        title="OUTFIT CATALOG"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flexDirection="row" flexWrap="wrap" backgroundColor='lightGrey'>
          {catalogItems.map((catalog) => (
            <OutfitCard key={catalog.id} outfit={catalog} onPress={() => navigation.navigate('OutfitDetail')} />
          ))}
        </Box>
      </ScrollView>
    </Box >
  )
}

export default OutfitCatalog
