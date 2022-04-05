import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import theme, { Box } from '../../components/Theme'



const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074
}

const { width } = Dimensions.get('window');
const Welcome = () => {
  return (
    <Box flex={1}>
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="slideGrey">
        <Image
          source={picture.src}
          style={[
            styles.picture,
            {
              width: width - theme.borderRadii.xl,
              height:
                ((width - theme.borderRadii.xl) * picture.height) / picture.width,
            },
          ]}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl"></Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  picture: {
    borderBottomRightRadius: 29,
  },
})

export default Welcome