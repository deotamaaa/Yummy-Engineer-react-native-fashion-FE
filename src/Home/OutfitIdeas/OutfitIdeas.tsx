import React from 'react'
import { View } from 'react-native'
import { Header } from '../../components'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  return (
    <>
      <Box flex={1} backgroundColor='white'>
        <Header
          title="OUTFIT IDEAS"
          left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
          right={{ icon: 'shopping-bag', onPress: () => true }}
        />
        <View></View>
      </Box>
    </>
  )
}

export default OutfitIdeas
