import React from 'react'
import { Dimensions, StyleSheet, View, Image } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import theme from './Theme'

const viewBox = {
  width: 375,
  height: 400,
}

const { width } = Dimensions.get('window')
const height = (100 * width) / viewBox.width

const d = 'M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 0 50 0 0 0 0 100'

interface ContentProp {
  children: React.ReactNode
}

const Content = ({ children }: ContentProp) => {
  return (
    <>
      <View style={styles.background}>
        <Image
          source={require('../components/assets/patterns/Rangitikei.png')}
          style={styles.image}
        />
        <Image
          source={require('../components/assets/patterns/Rangitikei.png')}
          style={styles.image}
        />
      </View>
      {children}
      <Svg
        viewBox={[0, 10, viewBox.width, viewBox.height].join(' ')}
        width={width}
        height='450'
      >
        <Path fill={theme.colors.white} d={d} />
      </Svg>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  image: {
    width,
    height: (width * 750) / 1125,
  },
})

export default Content
