import * as React from 'react';
import { View, Text, StyleProp, TextStyle } from 'react-native';
import { Renderer, Tester } from 'react-stories-common/dist/types';

export const renderer: Renderer = ({ story, action }) => {
  React.useEffect(() => {
    action('play');
  }, [story])

  return <View style={styles.storyContent}>
    <Text style={styles.text as StyleProp<TextStyle>}>This story could not be loaded.</Text>
  </View>
}

const styles = {
  storyContent: {
    width: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  text: {
    textAlign: 'center',
    color: 'white',
    width: '90%',
    margin: 'auto'
  }
};

export const tester: Tester = () => {
  return {
    condition: true,
    priority: 1
  };
}

export default {
  renderer,
  tester
}
