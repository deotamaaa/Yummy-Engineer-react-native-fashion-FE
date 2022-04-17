import React, { useState } from 'react'
import Button from '../../components/Button'
import theme, { Box } from '../../components/Theme'

interface CheckboxGroupProps {
  options: { value: string; label: string }[]
  radio?: boolean
}

const CheckboxGroup = ({ options, radio }: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  return (
    <Box flexDirection="row" flexWrap='wrap'>
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value)
        const isSelected = index !== -1

        return (
          <Button
            key={value}
            variant={isSelected ? 'primary' : 'default'}
            onPress={() => {
              if (radio) {
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
            label={label}
            style={{
              width: 'auto',
              height: 'auto',
              padding: 16,
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
          />
        )
      })}
    </Box>
  )
}

export default CheckboxGroup
