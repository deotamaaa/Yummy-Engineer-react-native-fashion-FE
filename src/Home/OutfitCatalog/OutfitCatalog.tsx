import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Header from '../../components/Header'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'
import { Product } from './models/product'

import OutfitCard from './OutfitCard'

const OutfitCatalog = ({
  navigation,
}: HomeNavigationProps<'OutfitCatalog'>) => {

  const [product, getProduct] = useState([])

  const getAllProduct = () => {
    axios.get('/products')
      .then((response) => {
        const allProduct = response.data
        getProduct(allProduct)
      })
  }

  useEffect(() => {
    getAllProduct()
  }, [])

  return (
    <Box flex={1} >
      <Header
        title="OUTFIT CATALOG"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flexDirection="row" flexWrap="wrap" backgroundColor='lightGrey'>
          {product.map((p: Product) => (
            <OutfitCard key={p.productId} outfit={p} onPress={() => navigation.navigate('OutfitDetail')} />
          ))}
        </Box>
      </ScrollView>
    </Box >
  )
}

export default OutfitCatalog
