import React from 'react'
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  ImageRequireSource,
} from 'react-native'

import { Text } from '../../components/Theme'

interface SlideProps {
  title: string
  right?: boolean
  picture: {
    src: ImageRequireSource
    width: number
    height: number
  }
}
const { width, height } = Dimensions.get('window')
export const SLIDE_HEIGHT = 0.61 * height
const BORDER_RADIUS = 75

const Slide = ({ title, right, picture }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image
          source={picture.src}
          style={[
            styles.picture,
            {
              width: width - BORDER_RADIUS,
              height:
                ((width - BORDER_RADIUS) * picture.height) / picture.width,
            },
          ]}
        />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    textAlign: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  picture: {
    borderBottomRightRadius: 29,
  },
})

export default Slide
