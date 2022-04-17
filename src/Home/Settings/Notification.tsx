import React, { useState } from 'react'
import { Switch } from 'react-native';
import { Box, Text } from '../../components/Theme';

interface NotificationProps {
  title: string;
  description: string;
}

const Notification = ({ title, description }: NotificationProps) => {
  const [toggled, setToggled] = useState(false);

  return (
    <Box flexDirection='row' marginBottom='m'>
      <Box flex={1}>
        <Text variant='title3'>{title}</Text>
        <Text variant='body'>{description}</Text>
      </Box>
      <Box padding='s'>
        <Switch value={toggled} onValueChange={setToggled} />
      </Box>
    </Box>
  )
}

export default Notification