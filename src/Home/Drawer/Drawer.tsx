import React from 'react'
import { Dimensions, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RoundedIconButton } from '../../components'
import theme, { Box, Text } from '../../components/Theme'
import DrawerItem, { DrawerItemProps } from './DrawerItem'

const aspectRatio = 750 / 1125
const { width } = Dimensions.get('window')
export const DRAWER_WIDTH = width * 0.8
const height = width * aspectRatio

const items: DrawerItemProps[] = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },
  {
    icon: 'heart',
    label: 'Favorites Outfit',
    screen: 'FavoritesOutfit',
    color: 'primary',
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'EditProfile',
    color: 'primary',
  },
  {
    icon: 'clock',
    label: 'Transactions History',
    screen: 'TransactionsHistory',
    color: 'primary',
  },
  {
    icon: 'settings',
    label: 'Notification Settings',
    screen: 'NotificationSettings',
    color: 'primary',
  },
  {
    icon: 'log-out',
    label: 'Logout',
    screen: 'Logout',
    color: 'secondary',
  },
]

const Drawer = () => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          flexDirection='row'
          justifyContent='space-between'
          paddingHorizontal='m'
          style={{ paddingTop: insets.top }}
        >
          <RoundedIconButton
            size={25}
            name='x'
            color='white'
            backgroundColor='secondary'
            onPress={() => true}
          />
          <Text color='white'>My Profile</Text>
          <RoundedIconButton
            size={25}
            name='shopping-bag'
            color='white'
            backgroundColor='secondary'
            onPress={() => true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor={'secondary'} />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderBottomRightRadius="xl"
          borderTopLeftRadius="xl"
          justifyContent='center'
          padding='l'
        >
          <Box
            position='absolute'
            top={-theme.spacing.xl}
            backgroundColor='primary'
            alignSelf='center'
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical='s'>
            <Text variant='title1' textAlign='center'>Young Key</Text>
            <Text variant='body' textAlign='center'>youngkey@email.com</Text>
          </Box>
          {items.map(item => (<DrawerItem key={item.screen} {...item} />))}
        </Box>
      </Box>

      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.35}
      >
        <Image
          source={require('../../components/assets/patterns/1.png')}
          style={{
            width: DRAWER_WIDTH,
            height: height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  )
}

export default Drawer
