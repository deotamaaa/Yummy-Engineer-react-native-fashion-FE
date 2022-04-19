import React, { useRef, } from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'
import { interpolateColor } from 'react-native-redash'
import Slide, { SLIDE_HEIGHT } from './Slide'
import Subslide from './Subslide'
import Dot from './Dot'
import { AuthNavigationProps } from '../../components/Navigation'
import { theme } from '../../components'

const BORDER_RADIUS = 75
const { width } = Dimensions.get('window')

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description: `Confused about your outfite? Don't worry! Find the best outfit here!`,
    color: '#BFEAF5',
    picture: {
      src: require('../../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: {
      src: require('../../../assets/2.png'),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & uniqe style and look amazing everyday',
    color: '#FFE4D9',
    picture: {
      src: require('../../../assets/3.png'),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Looks Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#847E94',
    picture: {
      src: require('../../../assets/4.png'),
      width: 1757,
      height: 2551,
    },
  },
]

export const assets = slides.map((slide) => slide.picture.src)

const Onboarding = ({ navigation }: AuthNavigationProps<'Onboarding'>) => {
  const scroll = useRef<Animated.ScrollView>(null)

  const x = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x
    },
  })

  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide) => slide.color)
    )
  )

  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }))

  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }))

  const currentIndex = useDerivedValue(() => x.value / width)
  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }))

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slider]}>
        {slides.map(({ picture }, index) => {
          const style = useAnimatedStyle(() => ({
            opacity: interpolate(
              x.value,
              [(index - 0.5) * width, index * width, (index + 0.5) * width],
              [0, 1, 0],
              Extrapolate.CLAMP,
            ),
          }))
          return (
            <Animated.View style={[styles.underlay, style]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height: ((width - theme.borderRadii.xl) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          //@ts-ignore
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      {/* Footer */}
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFillObject, background]} />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={currentIndex} {...{ index, x }} />
            ))}
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                width: width * slides.length,
              },
              footerStyle,
            ]}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome')
                    } else {
                      scroll.current?.scrollTo({ x: width * (index + 1), animated: true })
                    }
                  }}
                  last={index === slides.length - 1}
                  {...{ subtitle, description }}
                />
              )
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: 'hidden',
  },
})

export default Onboarding
