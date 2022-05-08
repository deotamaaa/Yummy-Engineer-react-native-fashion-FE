import React from 'react';
import RoundedIconButton from './RoundedIconButton';
import { Box, Text } from '../components/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right?: {
    icon: string;
    onPress: () => void;
  };
  dark?: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'white' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 'lightGrey';
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
      paddingTop="s"
    >
      <RoundedIconButton
        size={44}
        name={left.icon}
        onPress={left.onPress}
        iconRatio={0.4}
        align={'center'}
        {...{ color }}
      />
      <Text {...{ color }}>{title}</Text>
      {right ? (
        <RoundedIconButton
          size={44}
          name={right.icon}
          onPress={right.onPress}
          iconRatio={0.4}
          align={'center'}
          {...{ color }}
        />
      ) : (
        <View style={{ width: 44 }} />
      )}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};
export default Header;
