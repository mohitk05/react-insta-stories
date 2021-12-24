import * as React from 'react';
import Spinner from '../components/Spinner';
import { Renderer, Tester } from 'react-stories-common/dist/types';
import WithHeader from './wrappers/withHeader';
import WithSeeMore from './wrappers/withSeeMore';
import { StyleProp, View, ViewStyle } from 'react-native';
import Video from 'react-native-video';

export const renderer: Renderer = ({ story, action, isPaused, config, messageHandler }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const { width, height, loader, storyStyles } = config;

  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {})
  }

  let vid = React.useRef(null);

  React.useEffect(() => {
    if (vid.current) {
      if (isPaused) {
        vid.current.pause();
      } else {
        vid.current.play().catch(() => { });
      }
    }
  }, [isPaused]);

  const onWaiting = () => {
    action("pause", true);
  }

  const onPlaying = () => {
    action("play", true);
  }

  const videoLoaded = () => {
    messageHandler('UPDATE_VIDEO_DURATION', { duration: vid.current.duration });
    setLoaded(true);
    vid.current.play().then(() => {
      action('play');
    }).catch(() => {
      setMuted(true);
      vid.current.play().finally(() => {
        action('play');
      })
    });
  }

  return <WithHeader story={story} globalHeader={config.header}>
    <WithSeeMore story={story} action={action}>
      <View style={styles.videoContainer as StyleProp<ViewStyle>}>
        <Video
          ref={ref => (vid.current = ref)}
          style={computedStyles}
          source={{ uri: story.url }}
          controls={false}
          onVideoLoad={videoLoaded}
          onVideoBuffer={onWaiting}
          onVideoProgress={onPlaying}
        />
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
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  videoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export const tester: Tester = (story) => {
  return {
    condition: story.type === 'video',
    priority: 2
  }
}

export default {
  renderer,
  tester
}
