import * as React from 'react';
import Spinner from '../components/Spinner';
import { Renderer, Tester } from 'react-stories-common/dist/types';
import WithHeader from './wrappers/withHeader';
import WithSeeMore from './wrappers/withSeeMore';
import { View, Image } from 'react-native';

export const renderer: Renderer = ({ story, action, isPaused, config }) => {
  const [loaded, setLoaded] = React.useState(false);
  const { width, height, loader, storyStyles } = config;
  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {})
  }

  const imageLoaded = () => {
    setLoaded(true);
    action('play');
  }

  return <WithHeader story={story} globalHeader={config.header}>
    <WithSeeMore story={story} action={action}>
      <View>
        <Image style={computedStyles} source={{ uri: story.url }} onLoad={imageLoaded} />
        {!loaded && (
          <View
            style={{
              width: width,
              height: height,
              position: "absolute",
              left: 0,
              top: 0,
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              zIndex: 9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loader || <Spinner />}
          </View>
        )}
      </View>
    </WithSeeMore>
  </WithHeader>
}

const styles = {
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden"
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  }
};

export const tester: Tester = (story) => {
  return {
    condition: !story.content && (!story.type || story.type === 'image'),
    priority: 2
  }
}

export default {
  renderer,
  tester
}
