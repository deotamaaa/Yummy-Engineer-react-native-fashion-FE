import React, { useState } from 'react'
import { sub } from 'react-native-reanimated'
import { useTransition } from 'react-native-redash'
import { Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'

import Background from './Background'
import Card from './Card'
import Categories from './Categories'

const cards = [
  {
    index: 3,
    source: require('../../../assets/4.png'),
  },
  {
    index: 2,
    source: require('../../../assets/3.png'),
  },
  {
    index: 1,
    source: require('../../../assets/2.png'),
  },
  {
    index: 0,
    source: require('../../../assets/1.png'),
  },
]

const step = 1 / (cards.length - 1)

const OutfitIdeas = ({ navigation }: HomeNavigationProps<'OutfitIdeas'>) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const aIndex = useTransition(currentIndex)
  return (
    <>
      <Box flex={1} backgroundColor="white">
        <Header
          title="OUTFIT IDEAS"
          left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
          right={{ icon: 'shopping-bag', onPress: () => true }}
        />
        <Box flex={1}>
          <Background />
          <Categories />
          {cards.map(
            ({ index, source }) =>
              currentIndex < index * step + step && (
                <Card
                  key={index}
                  position={sub(index * step, aIndex)}
                  onSwipe={() => setCurrentIndex((prev) => prev + step)}
                  {...{ source, step }}
                />
              )
          )}
        </Box>
      </Box>
    </>
  )
}

export default OutfitIdeas
