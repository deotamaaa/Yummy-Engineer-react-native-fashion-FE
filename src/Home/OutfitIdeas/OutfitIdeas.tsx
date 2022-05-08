import React, { useState } from 'react';
import { sub, useDerivedValue } from 'react-native-reanimated';
import { useTiming } from 'react-native-redash';
import { Header } from '../../components';
import { HomeNavigationProps } from '../../components/Navigation';
import { Box } from '../../components/Theme';

import Background from './Background';
import Card from './Card';
import Categories from './Categories';

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
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<'OutfitIdeas'>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTiming(currentIndex);
  // const position = useDerivedValue(() => )
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
                  index={index}
                  aIndex={aIndex}
                  step={step}
                  onSwipe={() => setCurrentIndex((prev) => prev + step)}
                  {...{ source }}
                />
              )
          )}
        </Box>
      </Box>
    </>
  );
};

export default OutfitIdeas;
