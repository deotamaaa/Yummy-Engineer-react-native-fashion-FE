import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const OutfitCard = ({ outfit }: any) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OutfitCard;
