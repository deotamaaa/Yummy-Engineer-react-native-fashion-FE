import React from 'react';
import Button from '../../components/Button';
import { Box, Text } from '../../components/Theme';
import SocialIcon from './SocialIcon';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialIcon />
      <Box alignItems="center">
        <Button label="" variant="transparent" onPress={onPress}>
          <Text color="white">{`${title}`}</Text>
          <Text color="primary">{`${action}`}</Text>
        </Button>
      </Box>
    </>
  );
};

export default Footer;
