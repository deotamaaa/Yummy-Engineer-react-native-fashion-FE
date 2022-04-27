import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Card, Paragraph, List, FAB } from 'react-native-paper'
import { Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'
import { AntDesign } from '@expo/vector-icons'
import Size from './Size'
import axios from 'axios'

const OutfitDetail = ({ route, navigation }: HomeNavigationProps<'OutfitDetail'>) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false)
  const [sizeExpanded, setSizeExpanded] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const { Id } = route.params

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

  const [name, setName] = useState()
  const [brand, setBrand] = useState()
  const [image, setImage] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [size, setSize] = useState([])

  const getProduct = async () => {
    const { data } = await axios.get(`/products/${Id}`)
    setName(data.productName)
    setBrand(data.productBrand)
    setImage(data.productImage)
    setPrice(data.productPrice)
    setDescription(data.productDescription)
    // console.log(data)
  }

  useEffect(() => {
    getProduct()
  }, [getProduct])

  return (
    <Box flex={1}>
      <Header
        title="OUTFIT CATALOG"
        left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
      />
      <Card style={{ height: '100%' }}>
        <Card.Cover
          source={{ uri: image }}
          style={{ height: '50%' }}
        />
        <Card.Title
          title={name}
          titleStyle={styles.cardTitle}
          subtitle={brand}
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
          <Paragraph style={styles.cardPrice}>{(price)}</Paragraph>
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
              {description}
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
