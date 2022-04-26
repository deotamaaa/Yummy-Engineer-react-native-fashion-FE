import React from 'react'
import Header from '../../components/Header'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'

const OutfitCatalog = ({ navigation }: HomeNavigationProps<'OutfitCatalog'>) => {
  return (
    <Box>
      <Header
        title="OUTFIT CATALOG"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />

    </Box>
  )
}

export default OutfitCatalog