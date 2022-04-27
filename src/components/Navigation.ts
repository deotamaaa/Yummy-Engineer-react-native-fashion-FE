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
  Authentication: any
  Home: any
}

export type Routes = {
  Onboarding: any
  Welcome: any
  Login: any
  Signup: any
  ForgotPassword: any
  ChangedPasswordSuccess: any
}

export type HomeRoutes = {
  OutfitIdeas: any
  FavoriteOutfits: any
  TransactionHistory: any
  EditProfile: any
  NotificationSettings: any
  Settings: any
  Cart: any
  OutfitCatalog: any
  OutfitDetail: any
}
