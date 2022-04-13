import React from 'react'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import theme, { Box } from '../../components/Theme'


import Footer from './Footer'
import Outfit from './Outfit'

const { width: wWidth } = Dimensions.get('window')

const outfits = [
  {
    id: 1,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: '#BEECC4',
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: '#FFE4D9',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 4,
    color: '#D5C3BB',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 5,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: '#BEECC4',
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: '#D5C3BB',
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: '#DEEFC4',
    aspectRatio: 160 / 145,
    selected: false,
  },
]

const FavoritesOutfits = ({
  navigation,
}: HomeNavigationProps<'FavoriteOutfits'>) => {

  const width = (wWidth - theme.spacing.m * 2 - theme.spacing.s) / 2

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="FAVORITE OUTFITS"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      <ScrollView contentContainerStyle={{ paddingHorizontal: theme.spacing.m }}>
        <Box flexDirection="row">
          <Box marginRight='s'>
            {outfits
              .filter((_, i) => i % 2 !== 0)
              .map((outfit) => (
                <Outfit key={outfit.id} outfit={outfit} width={width} />
              ))}
          </Box>
          <Box>
            {outfits
              .filter((_, i) => i % 2 === 0)
              .map((outfit) => (
                <Outfit key={outfit.id} outfit={outfit} width={width} />
              ))}
          </Box>
        </Box>
      </ScrollView >
      <Footer label="Add to Favorites" onPress={() => true} />
    </Box >
  )
}

export default FavoritesOutfits
