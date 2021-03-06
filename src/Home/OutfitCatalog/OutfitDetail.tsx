import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Paragraph, List, FAB } from 'react-native-paper';
import { Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import { Box } from '../../components/Theme';
import { AntDesign } from '@expo/vector-icons';
import RoundedCheckboxGroup from '../EditProfile/RoundedCheckboxGroup';

const OutfitDetail = ({
  route,
  navigation,
}: HomeNavigationProps<'OutfitDetail'>) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [sizeExpanded, setSizeExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { product } = route.params;

  const AvailSize = product.sizes.map((item: any) => {
    return { value: item, label: item };
  });

  return (
    <Box flex={1}>
      <Header
        title={product.productName}
        left={{ icon: 'arrow-left', onPress: () => navigation.goBack() }}
      />
      <Card style={{ height: '100%' }}>
        <Card.Cover
          source={{ uri: product.productImage }}
          style={{ height: '50%' }}
        />
        <Card.Title
          title={product.productName}
          titleStyle={styles.cardTitle}
          subtitle={product.productBrand}
          subtitleStyle={styles.cardSubtitle}
          right={() => (
            <TouchableOpacity>
              <AntDesign
                name="heart"
                style={favorite ? { color: 'red' } : { color: 'black' }}
                onPress={() =>
                  favorite ? setFavorite(false) : setFavorite(true)
                }
                size={24}
              />
            </TouchableOpacity>
          )}
          rightStyle={{ marginRight: 32 }}
        />
        <Card.Content style={{ marginTop: 10 }}>
          <Paragraph style={styles.cardPrice}>{product.productPrice}</Paragraph>
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
              {product.productDescription}
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
            <RoundedCheckboxGroup options={AvailSize} radio />
          </List.Accordion>
        </Card.Content>
      </Card>
      <FAB
        style={styles.fab}
        color="white"
        icon="cart"
        onPress={() => alert('anjay')}
      />
    </Box>
  );
};

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
});
export default OutfitDetail;
