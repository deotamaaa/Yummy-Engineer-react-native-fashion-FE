import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card, Paragraph, List, FAB } from 'react-native-paper'
import { Button, Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'
import { AntDesign } from '@expo/vector-icons'
import Size from './Size'
import CatalogFooter from './CatalogFooter'

const OutfitDetail = ({ navigation }: HomeNavigationProps<'OutfitDetail'>) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)
  const [sizeExpanded, setSizeExpanded] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const itemDetail = {
    id: 1,
    name: 'Bomber Super Cool',
    brand: 'H&M',
    size: [
      {
        sizeId: 1,
        name: 's',
        quantity: '10',
      },
      {
        sizeId: 2,
        name: 'm',
        quantity: '10',
      },
      {
        sizeId: 3,
        name: 'l',
        quantity: '10',
      },
      {
        sizeId: 4,
        name: 'xl',
        quantity: '10',
      },
    ],
    price: '$100',
    description:
      'Jaket bomber ringan dari kain tenun dengan kerah rib mandarin dan ritsleting di bagian depan. Saku samping dengan kancing tekan tersembunyi, dan satu saku dalam dengan kancing tekan. Motif garis yang lebar di bagian manset dan kelim. Dengan furing.',
    image:
      'https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/b9e72b5c08407ad53bb0ab71a65f2db48e476c31_xxl-1.jpg',
  }

  return (
    <Box flex={1}>
      <Header
        title="OUTFIT CATALOG"
        left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
      />
      <Card style={{ height: '100%' }}>
        <Card.Cover
          source={{ uri: itemDetail.image }}
          style={{ height: '50%' }}
        />
        <Card.Title
          title={itemDetail.name}
          titleStyle={styles.cardTitle}
          subtitle={itemDetail.brand}
          subtitleStyle={styles.cardSubtitle}
          right={() => (
            <TouchableOpacity>
              <AntDesign
                name="heart"
                style={favorite ? { color: 'red' } : { color: 'black' }}
                onPress={() => favorite ? setFavorite(false) : setFavorite(true)}
                size={24}
              />
            </TouchableOpacity>
          )}
          rightStyle={{ marginRight: 32 }}
        />
        <Card.Content style={{ marginTop: 10 }}>
          <Paragraph style={styles.cardPrice}>{itemDetail.price}</Paragraph>
          <Size />
          <List.Accordion
            style={
              !descriptionExpanded
                ? { backgroundColor: 'white' }
                : { backgroundColor: 'grey' }
            }
            title="Product Description"
            titleStyle={
              !descriptionExpanded ? { color: 'black' } : { color: 'white' }
            }
            expanded={descriptionExpanded}
            onPress={() => setDescriptionExpanded(!descriptionExpanded)}
          >
            <Paragraph style={{ fontSize: 12, fontStyle: 'italic' }}>
              {itemDetail.description}
            </Paragraph>
          </List.Accordion>

          <List.Accordion
            style={
              !sizeExpanded
                ? { backgroundColor: 'white' }
                : { backgroundColor: 'grey' }
            }
            title="Available Size"
            titleStyle={!sizeExpanded ? { color: 'black' } : { color: 'white' }}
            expanded={sizeExpanded}
            onPress={() => setSizeExpanded(!sizeExpanded)}
          >
            <List.Item
              title={itemDetail.size[0]?.name}
              description={itemDetail.size[0]?.quantity}
            />
          </List.Accordion>
        </Card.Content>
      </Card>
      <FAB
        style={styles.fab}
        color='white'
        icon="cart"
        onPress={() => alert('anjay')}
      />
    </Box>
  )
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 14,
  },
  cardSubtitle: {
    fontSize: 14,
  },
  cardPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
export default OutfitDetail
