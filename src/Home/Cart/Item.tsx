import React from 'react'
import { Box } from '../../components/Theme'

interface ItemProps { }

const Item = () => {
  return (
    <Box padding="m" flexDirection="row">
      <Box
        width={120}
        height={120}
        borderRadius="m"
        backgroundColor="yellow"
      ></Box>
    </Box>
  )
}

export default Item
