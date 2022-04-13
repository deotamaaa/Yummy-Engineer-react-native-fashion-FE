import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { RoundedIcon } from '../../components'
import { HomeRoutes } from '../../components/Navigation'
import { Box, Theme, Text } from '../../components/Theme'

export interface DrawerItemProps {
  icon: string
  color: keyof Theme['colors']
  screen: keyof HomeRoutes
  label: string
}

const DrawerItem = ({ icon, color, screen, label }: DrawerItemProps) => {
  const navigation = useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>()
  return (
    <RectButton onPress={() => navigation.navigate(screen)}>
      <Box flexDirection="row" alignItems='center' padding='m'>
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color={'white'}
        />
        <Text variant='button' marginLeft='m'>{label}</Text>
      </Box>
    </RectButton >
  )
}

export default DrawerItem
