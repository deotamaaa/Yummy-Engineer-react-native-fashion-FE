import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface AuthNavigationProps<RouteName extends keyof Routes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<Routes, RouteName>,
    DrawerNavigationProp<AppRoutes, 'Home'>
  >
  route: RouteProp<Routes, RouteName>
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>
  route: RouteProp<HomeRoutes, RouteName>
}

export type AppRoutes = {
  Authentication: undefined
  Home: undefined
}

export type Routes = {
  Onboarding: undefined
  Welcome: undefined
  Login: undefined
  Signup: undefined
  ForgotPassword: undefined
  ChangedPasswordSuccess: undefined
}

export type HomeRoutes = {
  OutfitIdeas: undefined
  FavoriteOutfits: undefined
  TransactionHistory: undefined
  EditProfile: undefined
  NotificationSettings: undefined
  Settings: undefined
  Cart: undefined
}
