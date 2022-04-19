import React, { Children, ReactNode, useState } from 'react'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { mix, useTiming } from 'react-native-redash'
import { Text } from '../../components'
import theme, { Box } from '../../components/Theme'

const { width } = Dimensions.get('window')

interface Tab {
  id: string
  title: string
}

interface TabsProps {
  tabs: Tab[]
  children: ReactNode
}

const Tabs = ({ tabs, children }: TabsProps) => {
  const [index, setIndex] = useState(0)
  const transition = useTiming(index, { duration: 400 })
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: mix(transition.value, width * 0.25 - 5, width * 0.75) }]
  }))
  const style1 = useAnimatedStyle(() => ({
    transform: [{ translateX: -width * transition.value }]
  }))
  return (
    <Box flex={1}>
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
          style={[{
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: theme.colors.primary,
            width: 10,
            height: 10,
            borderRadius: 5,
          }, style]}
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
      <Animated.View
        style={[{
          flex: 1,
          width: width * tabs.length,
          flexDirection: 'row',
        }, style1]}
      >
        {Children.map(children, (child, index) => (
          <Box flex={1} key={index} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  )
}

export default Tabs
