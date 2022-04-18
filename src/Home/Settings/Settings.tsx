import React from 'react'
import { Header } from '../../components'
import Content from '../../components/Content'
import { HomeNavigationProps } from '../../components/Navigation'
import { Box } from '../../components/Theme'

import Notification from './Notification'

const Settings = ({ navigation }: HomeNavigationProps<'Settings'>) => {
  return (
    <Content>
      <Box flex={1} backgroundColor="white">
        <Header
          title="SETTINGS"
          left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
          right={{ icon: 'share', onPress: () => true }}
        />
        <Box flex={1} padding="m">
          <Notification
            title="Outfit Ideas"
            description="Receive daily notification"
          />
          <Notification
            title="Discount & Sales"
            description="Buy the stuff you love for less"
          />
          <Notification
            title="Stock Notifications"
            description="If the product you 💜 comes back in stock"
          />
          <Notification
            title="New Stuff"
            description="Hear first, wear first"
          />
        </Box>
      </Box>
    </Content>
  )
}

export default Settings
