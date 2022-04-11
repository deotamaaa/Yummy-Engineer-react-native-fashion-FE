import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { RoundedIcon } from '../../components';
import { Box, Theme, Text } from '../../components/Theme';

interface DrawerItemProps {
  icon: string
  color: keyof Theme['colors']
  screen: string
  label: string

}

const DrawerItem = ({ icon, color, screen, label }: DrawerItemProps) => {
  return (
    <RectButton>
      <Box flexDirection='row'>
        <RoundedIcon
          name={icon} size={36} backgroundColor={color} color={"white"} />
        <Text></Text>
      </Box>
    </RectButton>
  )
}

export default DrawerItem