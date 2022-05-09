import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { HomeNavigationProps } from '../../components/Navigation';
import { Box } from '../../components/Theme';
import { ProductContext } from '../../context/ProductContext';


import OutfitCard from './OutfitCard';


const OutfitCatalog = ({
  navigation,
}: HomeNavigationProps<'OutfitCatalog'>) => {
  const { products, onRefresh, refreshing } = useContext(ProductContext);
  // const [product, getProduct] = useState<Product[]>([]);


  // const getAllProduct = async () => {
  //   await axios
  //     .get('/products')
  //     .then((response) => {
  //       const allProduct = response.data;
  //       getProduct(allProduct);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OutfitDetail', {
                product: item,
              })
              console.log('sizes = ', item.sizes)
            }
            }
          >
            <OutfitCard outfit={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.productId.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Box>
  );
};

export default OutfitCatalog;
