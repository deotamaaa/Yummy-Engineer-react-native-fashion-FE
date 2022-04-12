import React, { useState } from 'react'
import { View } from 'react-native'
import { Text } from '../../components'
import { Box } from '../../components/Theme'

const SIZE = 60

interface CategoryProps {
  category: {
    id: string;
    title: string;
    color: string;
  };
}

const Category = ({
  category: { color: backgroundColor, title, },
}: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <Box marginLeft='m' alignItems='center' marginTop='s'>
      <View
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor,
        }}
      />
      <Text textAlign='center' marginTop='s'>{title}</Text>
    </Box>
  )
}

export default Category
