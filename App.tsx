import * as React from 'react'
import { ThemeProvider } from '@shopify/restyle'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { assets as authenticationAssets, AuthenticationNavigator } from './src/Authentication'
import { LoadAssets, theme } from './src/components'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeNavigator, assets as homeAssets } from './src/Home'
import { AppRoutes } from './src/components/Navigation'

import axios from 'axios'

//Base url nya IP komputer
axios.defaults.baseURL = 'http://192.168.100.31:8000/api/';

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
}

const assets = [...authenticationAssets, ...homeAssets]

const AppStack = createStackNavigator<AppRoutes>()


export default function App() {
  return (
    <ThemeProvider {... { theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider >
  )
}
