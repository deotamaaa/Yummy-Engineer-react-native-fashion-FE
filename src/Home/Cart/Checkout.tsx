import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, Text } from '../../components/Theme';
import Card, { CardType } from './Card';

import AddCard from './AddCard';
import { CARD_HEIGHT } from './CardLayout';
import { Button } from '../../components';
interface CheckoutProps {
  minHeight: number;
}

const cards = [
  {
    id: 0,
    type: CardType.VISA,
    last4Digits: 5467,
    expiration: '05/24',
  },
  {
    id: 1,
    type: CardType.MASTERCARD,
    last4Digits: 7575,
    expiration: '11/22',
  },
  {
    id: 2,
    type: CardType.VISA,
    last4Digits: 9127,
    expiration: '12/25',
  },
  {
    id: 3,
    type: CardType.MASTERCARD,
    last4Digits: 2579,
    expiration: '01/21',
  },
  {
    id: 4,
    type: CardType.VISA,
    last4Digits: 6567,
    expiration: '03/22',
  },
];

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({ label, value }: LineItemProps) => {
  return (
    <Box flexDirection="row" paddingVertical="m">
      <Box flex={1}>
        <Text color="white">{label}</Text>
      </Box>
      <Box>
        <Text color="primary">${value}</Text>
      </Box>
    </Box>
  );
};
const Checkout = ({ minHeight }: CheckoutProps) => {
  const [selectedCard, setSelectedCard] = useState(cards[0]?.id);
  return (
    <Box flex={1} backgroundColor="secondary" style={{ paddingTop: minHeight }}>
      <Box flex={1} padding="m">
        <Box height={CARD_HEIGHT}>
          <ScrollView style={{ height: 160 }} horizontal showsHorizontalScrollIndicator={false}>
            <AddCard />
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                selected={selectedCard === card.id}
                onSelect={() => setSelectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </Box>
        <Box marginTop="l" flex={1}>
          <Text color="white" marginBottom="m">
            Delivery Address
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1}>
              <Text color="white">Unit 15, York Farm Business Centre</Text>
              <Text color="white">Watling St, Towcester</Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="white">Change</Text>
            </Box>
          </Box>
          <LineItem label="Total Items (6)" value={189.94} />
          <LineItem label="Standard Delivery" value={12} />
          <LineItem label="Total Payment" value={189.94} />
          <Box
            paddingVertical="m"
            alignItems="center"
            justifyContent="flex-end"
            flex={1}
          >
            <Button
              label="Swipe To Pay $201.84"
              variant="primary"
              onPress={() => true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
