import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Header } from '../../components';
import theme, { Box, Text } from '../../components/Theme';

import Tabs from './Tabs';
import Configuration from './Configuration';
import PersonalInfo from './PersonalInfo';
import { AuthContext } from '../../context/AuthContext';

const tabs = [
  { id: 'configuration', title: 'Configuration' },
  { id: 'info', title: 'Personal Info' },
];

const EditProfile = () => {
  const { user } = useContext(AuthContext);
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
            title="EDIT PROFILE"
            left={{
              icon: 'menu',
              onPress: () => navigation.dispatch(DrawerActions.openDrawer()),
            }}
            dark
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          top={-theme.spacing.xl}
          backgroundColor="primary"
          alignSelf="center"
          width={100}
          height={100}
          style={{ borderRadius: 50 }}
        />
        <Box marginVertical="m" style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant="title1" textAlign="center">
            {user?.firstName} {user?.lastName}
          </Text>
          <Text variant="body" textAlign="center">
            {user?.email}
          </Text>
        </Box>
      </Box>
      <Tabs tabs={tabs}>
        <Configuration />
        <PersonalInfo />
      </Tabs>
    </Box>
  );
};

export default EditProfile;
