import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import Header from '../../components/Header'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'
import { Product } from './models/product'

import OutfitCard from './OutfitCard'

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const OutfitCatalog = ({
  navigation
}: HomeNavigationProps<'OutfitCatalog'>) => {
  const [product, getProduct] = useState([])

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  const getAllProduct = async () => {
    await axios
      .get('/products')
      .then((response) => {
        const allProduct = response.data
        getProduct(allProduct)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllProduct()
  }, [])

  return (
    <Box flex={1}>
      <Header
        title="OUTFIT CATALOG"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh} />
        }
      >
        <Box flexDirection="row" flexWrap="wrap" backgroundColor="lightGrey">
          {product.map((p: Product) => (
            <OutfitCard
              key={p.productId}
              outfit={p}
              onPress={() =>
                navigation.navigate('OutfitDetail', {
                  Id: p.productId,
                })
              }
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}

export default OutfitCatalog
