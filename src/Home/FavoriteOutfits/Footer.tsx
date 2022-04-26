import React from 'react'
import { Button } from '../../components'
import { Box } from '../../components/Theme'

interface FooterProps {
  label: string
  onPress: () => void
}

const Footer = ({ label, onPress }: FooterProps) => {
  return (
    <Box backgroundColor="secondary">
      <Box alignItems="center" >
        <Button variant="primary" {...{ label, onPress }} />
      </Box >
    </Box>
  )
}

export default Footer
