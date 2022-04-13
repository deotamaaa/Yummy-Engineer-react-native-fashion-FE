import React, { useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Transition, Transitioning, TransitioningView } from 'react-native-reanimated'
import { Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import theme, { Box } from '../../components/Theme'

import Footer from './Footer'
import Outfit from './Outfit'
import TopCurve from './TopCurve'

const { width: wWidth } = Dimensions.get('window')

const defaultOutfits = [
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
  const transition = (
    <Transition.Together>
      <Transition.Change interpolation='easeInOut' durationMs={500} />
    </Transition.Together>
  )
  const list = useRef<TransitioningView>(null)
  const [outfits, setOutfits] = useState(defaultOutfits)
  const width = (wWidth - theme.spacing.m * 3) / 2
  const [footerHeight, setFooterHeight] = useState(0)

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="FAVORITE OUTFITS"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}
        >
          <Transitioning.View ref={list} transition={transition}>
            <Box flexDirection="row">
              <Box marginRight="s">
                {outfits
                  .filter(({ id }) => id % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter(({ id }) => id % 2 === 0)
                  .map((outfit) => (
                    <Outfit
                      key={outfit.id}
                      outfit={outfit}
                      width={width}
                    />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
      </Box >
      <TopCurve footerHeight={footerHeight} />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setFooterHeight(height)}
      >
        <Footer
          label="Add to Favorites"
          onPress={() => {
            list.current?.animateNextTransition()

            setOutfits(outfits.filter((outfit) => !outfit.selected))
          }}
        />
      </Box>
    </Box >
  )
}

export default FavoritesOutfits
