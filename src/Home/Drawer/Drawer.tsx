import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import axios from 'axios';
import React, { useContext } from 'react';
import { Dimensions, Image } from 'react-native';
import Header from '../../components/Header';
import theme, { Box, Text } from '../../components/Theme';
import { AuthContext } from '../../context/AuthContext';
import DrawerItem, { DrawerItemProps } from './DrawerItem';

export const assets = [require('../Drawer/assets/3.png')];
const aspectRatio = 750 / 1125;
const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const height = width * aspectRatio;

const Drawer = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const items: DrawerItemProps[] = [
    {
      icon: 'zap',
      label: 'Outfit Ideas',
      screen: 'OutfitIdeas',
      color: 'orange',
    },
    {
      icon: 'heart',
      label: 'Favorites Outfit',
      screen: 'FavoriteOutfits',
      color: 'pink',
    },
    {
      icon: 'layers',
      label: 'Outfit Catalog',
      screen: 'OutfitCatalog',
      color: 'lightBlue',
    },
    {
      icon: 'user',
      label: 'Edit Profile',
      screen: 'EditProfile',
      color: 'darkPink',
    },
    {
      icon: 'clock',
      label: 'Transactions History',
      screen: 'TransactionHistory',
      color: 'violet',
    },
    {
      icon: 'settings',
      label: 'Notification Settings',
      screen: 'Settings',
      color: 'darkBlue',
    },
    {
      icon: 'log-out',
      label: 'Logout',
      onPress: async (navigation) => {
        await userLogOut();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Authentication' }],
          })
        );
      },
      color: 'secondary',
    },
  ];

  const navigation = useNavigation();
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
        >
          <Header
            title="PROFILE MENU"
            left={{
              icon: 'x',
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{
              icon: 'shopping-bag',
              onPress: () => navigation.navigate('Cart'),
            }}
            dark
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
          justifyContent="center"
          padding="l"
        >
          <Box
            position="absolute"
            top={-theme.spacing.xl}
            backgroundColor="primary"
            alignSelf="center"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical="s">
            <Text variant="title1" textAlign="center">
              {user.firstName} {user.lastName}
            </Text>
            <Text variant="body" textAlign="center">
              {user?.email}
            </Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.icon} {...item} />
          ))}
        </Box>
      </Box>

      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.35}
      >
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height: height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
