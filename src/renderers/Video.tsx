import * as React from 'react';
import Spinner from '../components/Spinner';
import { Renderer, Tester } from './../interfaces';
import WithHeader from './wrappers/withHeader';
import WithSeeMore from './wrappers/withSeeMore';
import ReactPlayer from 'react-player';

export const renderer: Renderer = ({ story, action, isPaused, config, messageHandler }) => {
    const [playing, setPlaying] = React.useState(false);

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
            if (vid.current.getCurrentTime() === 0) {

            } else {
                if (isPaused) {
                    action("pause", true);
                    setPlaying(false);
                } else {
                    setPlaying(true);
                }
            }
        }
    }, [isPaused]);

    const onWaiting = () => {
        action("pause", true);
        setPlaying(false);
    }

    const onPlaying = () => {
        action("play", true);
        setPlaying(true);
    }

    const videoLoaded = () => {
        messageHandler('UPDATE_VIDEO_DURATION', { duration: vid.current.getDuration() });
        action('play');
        setLoaded(true);
        setPlaying(true);
    }

    return <WithHeader story={story} globalHeader={config.header}>
        <WithSeeMore story={story} action={action}>
            <div style={styles.videoContainer}>
                {/* <video
                    ref={vid}
                    style={computedStyles}
                    src={story.url}
                    controls={false}
                    onLoadStart={onWaiting}
                    onLoadedData={videoLoaded}
                    playsInline
                    onWaiting={onWaiting}
                    onPlaying={onPlaying}
                    muted={muted}
                    autoPlay
                    webkit-playsinline="true"
                /> */}

                <ReactPlayer
                    ref={vid}
                    style={computedStyles}
                    url={story.url}
                    controls={false}
                    playsinline
                    onReady={videoLoaded}
                    onBuffer={onWaiting}
                    onBufferEnd={onPlaying}
                    muted={muted}
                    className='react-player-video'
                    width='100%'
                    height='auto'
                    playing={playing}
                />
                {!loaded && (
                    <div
                        style={{
                            width: width,
                            height: height,
                            position: "absolute",
                            left: 0,
                            top: 0,
                            background: "rgba(0, 0, 0, 0.9)",
                            zIndex: 9,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#ccc"
                        }}
                    >
                        {loader || <Spinner />}
                    </div>
                )}
            </div>
        </WithSeeMore>
    </WithHeader >
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
