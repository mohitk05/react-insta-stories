import React from 'react'
import { ImageStyle, StyleProp, View, ViewStyle, Image, Text, TextStyle } from 'react-native'
import { HeaderProps } from 'react-stories-common/dist/types'

const Header = ({ profileImage, heading, subheading }: HeaderProps) =>
  <View style={styles.main as StyleProp<ViewStyle>}>
    {profileImage && <Image style={styles.img as StyleProp<ImageStyle>} source={{ uri: profileImage }} />}
    <View style={styles.text as StyleProp<ViewStyle>}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subheading}>{subheading}</Text>
    </View>
  </View>

const styles = {
  main: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
  },
  heading: {
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    marginBottom: 2
  },
  subheading: {
    fontSize: 0.6,
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0
  }
}

export default Header
