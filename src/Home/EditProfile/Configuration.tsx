import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Box, Text } from '../../components/Theme'

import CheckboxGroup from './CheckboxGroup'
import RoundedCheckboxGroup from './RoundedCheckboxGroup'

const outfitType = [
  { value: 'men', label: 'For men' },
  { value: 'women', label: 'For women' },
  { value: 'both', label: 'For both' },
]

const prefferedBrands = [
  { value: 'adidas', label: 'Adidas' },
  { value: 'nike', label: 'Nike' },
  { value: 'converse', label: 'Converse' },
  { value: 'tommy-hilfiger', label: 'Tommy Hilfiger' },
  { value: 'billionaire-boys-club', label: 'Billionaire Boys Club' },
  { value: 'jordan', label: 'Jordan' },
  { value: 'le-coq-sportif', label: 'Le Coq Sportif' },
]

const sizes = [
  { value: 's' },
  { value: 'm' },
  { value: 'l' },
  { value: 'xl' },
  { value: 'xxl' },
]

const colors = [
  { value: '#0C0D34' },
  { value: '#FF0058' },
  { value: '#50B9DE' },
  { value: '#00D99A' },
  { value: '#FE5E33' },
]

const Configuration = () => {
  return (
    <ScrollView>
      <Box padding="l">
        <Text paddingBottom="m" variant="body">
          What type of outfit you wear?
        </Text>
        <CheckboxGroup options={outfitType} radio />
        <Text paddingBottom="m" variant="body">
          What is your Favorite Color?
        </Text>
        <RoundedCheckboxGroup options={colors} valueIsColor />
        <Text paddingBottom="m" variant="body">
          What is your prefered Sizes?
        </Text>
        <RoundedCheckboxGroup options={sizes} />
        <Text paddingBottom="m" variant="body">
          What is your prefered Brands?
        </Text>
        <CheckboxGroup options={prefferedBrands} />
      </Box>
    </ScrollView>
  )
}

export default Configuration
