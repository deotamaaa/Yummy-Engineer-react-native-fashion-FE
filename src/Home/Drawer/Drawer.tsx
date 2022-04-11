import React from 'react'
import { Dimensions, Image } from 'react-native'
import theme, { Box } from '../../components/Theme'
import DrawerItem from './DrawerItem'

const aspectRatio = 750 / 1125
const { width } = Dimensions.get('window')
export const DRAWER_WIDTH = width * 0.8
const height = width * aspectRatio

const items = [
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
    label: ' Edit Profile',
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
        />
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
        >
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
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  )
}

export default Drawer
