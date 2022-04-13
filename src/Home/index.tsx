import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeRoutes } from '../components/Navigation'

import DrawerContent, { DRAWER_WIDTH } from './Drawer/Drawer'
import OutfitIdeas from './OutfitIdeas'
import FavoriteOutfits from './FavoriteOutfits'

const Drawer = createDrawerNavigator<HomeRoutes>()

export { assets } from './Drawer'
export const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      drawerStyle={{
        width: DRAWER_WIDTH,
      }}>
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
      <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
    </Drawer.Navigator>
  )
}
