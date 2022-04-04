import React from 'react'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import Animated, { multiply } from 'react-native-reanimated'
import { interpolateColor, onScrollEvent, useValue } from 'react-native-redash'

import Slide, { SLIDE_HEIGHT } from './Slide'
import Subslide from './Subslide'


const BORDER_RADIUS = 75;
const { width, height } = Dimensions.get('window')
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
		flexDirection: 'row',
		backgroundColor: 'white',
		borderTopLeftRadius: BORDER_RADIUS,
	}
})
const slides = [
	{ title: "Relaxed", subtitle: 'Find Your Outfits', description: `Confused about your outfite? Don't worry! Find the best outfit here!`, color: "#BFEAF5" },
	{ title: "Playful", subtitle: 'Hear it First, Wear it First', description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas', color: "#BEECC4" },
	{ title: "Excentric", subtitle: 'Your Style, Your Way', description: 'Create your individual & uniqe style and look amazing everyday', color: "#FFE4D9" },
	{ title: "Funky", subtitle: 'Looks Good, Feel Good', description: 'Discover the latest trends in fashion and explore your personality', color: "#847E94" },
]

const Onboarding = () => {
	const x = useValue(0);
	// UseScroll event
	const onScroll = onScrollEvent({ x });
	const backgroundColor = interpolateColor(x, {
		inputRange: slides.map((_, i) => i * width),
		outputRange: slides.map((slide) => slide.color),
	})
	return (
		<View style={styles.container}>
			<Animated.View style={[styles.slider, { backgroundColor }]}>
				<Animated.ScrollView
					horizontal
					snapToInterval={width}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					bounces={false}
					scrollEventThrottle={1}
					{...{ onScroll }}
				>
					{slides.map(({ title }, index) =>
						<Slide key={index} right={!!(index % 2)}  {...{ title }} />
					)}
				</Animated.ScrollView>
			</Animated.View>
			<View style={styles.footer}>
				<Animated.View
					style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
				/>
				<Animated.View style={[
					styles.footerContent, {
						width: width * slides.length,
						transform: [{ translateX: multiply(x, -1) }],
					}]} >
					{slides.map(({ subtitle, description }, index) =>
						<Subslide
							key={index}
							last={index === slides.length - 1}
							{...{ subtitle, description }} />
					)}
				</Animated.View>
			</View>
		</View>
	)
}

export default Onboarding
