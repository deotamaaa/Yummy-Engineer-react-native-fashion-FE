import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { mix, useTransition } from 'react-native-redash'
import { Text } from '../../components'
import theme, { Box } from '../../components/Theme'

const { width } = Dimensions.get('window')

interface Tab {
  id: string
  title: string
}

interface TabsProps {
  tabs: Tab[]
}

const Tabs = ({ tabs }: TabsProps) => {
  const [index, setIndex] = useState(0)
  const selectedTab = tabs[index]
  const transition = useTransition(index, { duration: 400 })
  const translateX = mix(transition, width * 0.25 - 5, width * 0.75)
  return (
    <Box>
      <Box flexDirection="row">
        {tabs.map((tab, i) => (
          <RectButton
            style={{ flex: 1 }}
            key={tab.id}
            onPress={() => setIndex(i)}
          >
            <Box padding="m" style={{ paddingBottom: theme.spacing.m + 3 }}>
              <Text variant="title3" textAlign="center">
                {tab.title}
              </Text>
            </Box>
          </RectButton>
        ))}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: theme.colors.primary,
            width: 10,
            height: 10,
            borderRadius: 5,
            transform: [{ translateX }]
          }}
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width={10}
          height={10}
          style={{ borderRadius: 5 }}
        />
      </Box>
    </Box>
  )
}

export default Tabs
