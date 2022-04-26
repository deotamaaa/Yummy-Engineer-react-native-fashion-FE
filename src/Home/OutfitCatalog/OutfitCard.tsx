import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Card, Paragraph } from 'react-native-paper'

interface OutfitCatalogProps {
  outfit: {
    id: number;
    name: string;
    size: string[];
    brand: string;
    price: string;
    image: string;
  },
  onPress: () => void;
}

const OutfitCard = ({ outfit, onPress }: OutfitCatalogProps) => {

  return (
    <TouchableOpacity onPress={onPress} >
      <Card style={{ marginHorizontal: 16, marginVertical: 14, width: 170 }}>
        <Card.Cover source={{ uri: outfit.image }} />
        <Card.Title
          title={outfit.name}
          titleStyle={styles.cardTitle}
          subtitle={outfit.brand}
        />
        <Card.Content>
          <Paragraph>{outfit.price}</Paragraph>
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
