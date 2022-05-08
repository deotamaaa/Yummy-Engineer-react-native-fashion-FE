import React from 'react';
import theme, { Box, Text } from '../../components/Theme';
import SwipeableRow from './SwipeableRow';

interface ItemProps {
  onDelete: () => void;
}

const Item = ({ onDelete }: ItemProps) => {
  return (
    <SwipeableRow onDelete={onDelete}>
      <Box padding="s" flexDirection="row">
        <Box
          width={120}
          height={120}
          borderRadius="m"
          backgroundColor="yellow"
          opacity={0.5}
        />
        <Box padding="m" flex={1}>
          <Text variant="header">Size M, L</Text>
          <Text variant="title3">Short Sleeve Organic Top</Text>
          <Text variant="body" color="primary">
            $430
          </Text>
        </Box>
        <Box>
          <Box
            backgroundColor="secondary"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 15,
            }}
          >
            <Text variant="header" color="white">
              x2
            </Text>
          </Box>
        </Box>
      </Box>
    </SwipeableRow>
  );
};

export default Item;
