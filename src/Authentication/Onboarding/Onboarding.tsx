import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Animated, { divide, multiply } from 'react-native-reanimated'
import { interpolateColor, onScrollEvent, useValue } from 'react-native-redash'

import Slide, { SLIDE_HEIGHT } from './Slide'
import Subslide from './Subslide'
import Dot from './Dot'

const BORDER_RADIUS = 75
const { width } = Dimensions.get('window')

const slides = [
	{
		title: 'Relaxed',
		subtitle: 'Find Your Outfits',
		description: `Confused about your outfite? Don't worry! Find the best outfit here!`,
		color: '#BFEAF5',
		picture: require("../../../assets/1.png")
	},
	{
		title: 'Playful',
		subtitle: 'Hear it First, Wear it First',
		description:
			'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
		color: '#BEECC4',
		picture: require("../../../assets/2.png")
	},
	{
		title: 'Excentric',
		subtitle: 'Your Style, Your Way',
		description:
			'Create your individual & uniqe style and look amazing everyday',
		color: '#FFE4D9',
		picture: require("../../../assets/3.png")
	},
	{
		title: 'Funky',
		subtitle: 'Looks Good, Feel Good',
		description:
			'Discover the latest trends in fashion and explore your personality',
		color: '#847E94',
		picture: require("../../../assets/4.png")
	},
]

const Onboarding = () => {
	const scroll = useRef<Animated.ScrollView>(null)
	const x = useValue(0)
	// UseScroll event
	const onScroll = onScrollEvent({ x })
	const backgroundColor = interpolateColor(x, {
		inputRange: slides.map((_, i) => i * width),
		outputRange: slides.map((slide) => slide.color),
	}) as any

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.slider, { backgroundColor }]}>
				<Animated.ScrollView
					//@ts-ignore
					ref={scroll}
					horizontal
					snapToInterval={width}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					bounces={false}
					{...{ onScroll }}
				>
					{slides.map(({ title, picture }, index) => (
						<Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
					))}
				</Animated.ScrollView>
			</Animated.View>

			{/* Footer */}

			<View style={styles.footer}>
				<Animated.View
					style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
				/>
				<View style={styles.footerContent}>
					<View style={styles.pagination}>
						{slides.map((_, index) => (
							<Dot
								key={index}
								currentIndex={divide(x, width)}
								{...{ index, x }}
							/>
						))}
					</View>
					<Animated.View
						style={{
							flex: 1,
							flexDirection: 'row',
							width: width * slides.length,
							transform: [{ translateX: multiply(x, -1) }],
						}}
					>
						{slides.map(({ subtitle, description }, index) => (
							<Subslide
								key={index}
								onPress={() => {
									if (scroll.current) {
										scroll.current
											.getNode()
											.scrollTo({ x: width * (index + 1), animated: true })
									}
								}}
								last={index === slides.length - 1}
								{...{ subtitle, description }}
							/>
						))}
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
})

export default Onboarding
