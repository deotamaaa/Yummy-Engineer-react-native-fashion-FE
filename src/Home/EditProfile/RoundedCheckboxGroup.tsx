import React, { useState } from 'react'
import { View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import theme, { Box, Text } from '../../components/Theme'
import { Feather as Icon } from '@expo/vector-icons'

interface RoundedCheckboxGroupProps {
  options: { value: string }[]
  valueIsColor?: boolean
}

const RoundedCheckboxGroup = ({
  options,
  valueIsColor,
}: RoundedCheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  return (
    <Box flexDirection="row" flexWrap="wrap">
      {options.map(({ value }) => {
        const index = selectedValues.indexOf(value)
        const isSelected = index !== -1
        const backgroundColor = isSelected
          ? theme.colors.primary
          : theme.colors.slideGrey

        return (
          <BorderlessButton
            key={value}
            onPress={() => {
              if (isSelected) {
                setSelectedValues([value])
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1)
                } else {
                  selectedValues.push(value)
                }
                setSelectedValues([...selectedValues])
              }
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: isSelected ? 2 : 0,
                  backgroundColor: valueIsColor ? value : backgroundColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                  marginRight: 12,
                }}
              >
                {!valueIsColor && (
                  <Text
                    textAlign="center"
                    variant="header"
                    color={isSelected ? 'white' : 'secondary'}
                  >
                    {value.toUpperCase()}
                  </Text>
                )}
                {valueIsColor && isSelected && (
                  <Icon color="white" name="check" size={16} />
                )}
              </View>
            </View>
          </BorderlessButton>
        )
      })}
    </Box>
  )
}

export default RoundedCheckboxGroup
