import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
import Header from '../../components/Header'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'
import { Product } from './models/product'

import OutfitCard from './OutfitCard'

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

const OutfitCatalog = ({
  navigation,
}: HomeNavigationProps<'OutfitCatalog'>) => {
  const [product, getProduct] = useState([])

  const [refreshing, setRefreshing] = useState(false)

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

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => (getAllProduct(), setRefreshing(false)))
  }, [])

  useEffect(() => {
    getAllProduct()
  }, [])

  return (
    <Box flex={1}>
      <Header
        title="OUTFIT CATALOG"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
      />
      <FlatList
        numColumns={2}
        style={{
          flexBasis: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: 'white',
        }}
        data={product}
        renderItem={({ item }) => (
          <OutfitCard
            key={item.productId}
            outfit={item}
            onPress={() =>
              navigation.navigate('OutfitDetail', {
                Id: item.productId,
              })
            }
          />
        )}
        keyExtractor={(item: Product) => item.productId}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Box>
  )
}

export default OutfitCatalog
