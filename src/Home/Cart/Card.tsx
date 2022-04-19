import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '../../components/Theme'
import CardLayout from './CardLayout'

export enum CardType {
  VISA,
  MASTERCARD,
}

export interface CardModel {
  id: number
  type: CardType
  last4Digits: number
  expiration: string
}

interface CardProps {
  card: CardModel
  selected: boolean
  onSelect: () => void
}

const MasterCard = require('./assets/Mastercard.png')
const Visa = require('./assets/Visa.png')

function Card({ card, selected, onSelect }: CardProps) {
  return (
    <CardLayout
      onPress={onSelect}
      backgroundColor={selected ? 'primary' : 'white'}
    >
      <View style={{ height: 20 }}>
        <Image
          style={
            card.type === CardType.VISA
              ? { width: 39, height: 13 }
              : { width: 32.5, height: 20 }
          }
          source={card.type === CardType.VISA ? Visa : MasterCard}
        />
      </View>
      <Text
        variant="title3"
        marginTop='m'
        marginBottom='s'
        color={selected ? 'white' : 'black'}
      >
        **** {card.last4Digits}
      </Text>
      <Text opacity={0.5} color='black'>Expiration</Text>
      <Text color={selected ? 'white' : 'black'}>{card.expiration}</Text>
    </CardLayout>
  )
}

export default Card
