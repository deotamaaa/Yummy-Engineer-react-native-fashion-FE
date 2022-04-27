import React, { } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Card, Paragraph } from 'react-native-paper'

interface OutfitCatalogProps {
  outfit: {
    productId: number,
    productName: string,
    productBrand: string,
    productPrice: string,
    productDescription: string,
    productImage: string,
  },
  onPress: () => void;
}

const OutfitCard = ({ outfit, onPress }: OutfitCatalogProps) => {

  return (
    <TouchableOpacity onPress={onPress} >
      <Card style={{ marginHorizontal: 16, marginVertical: 14, width: 170 }}>
        <Card.Cover source={{ uri: outfit.productImage }} />
        <Card.Title
          title={outfit.productName}
          titleStyle={styles.cardTitle}
          subtitle={outfit.productBrand}
        />
        <Card.Content>
          <Paragraph>{outfit.productPrice}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default OutfitCard
