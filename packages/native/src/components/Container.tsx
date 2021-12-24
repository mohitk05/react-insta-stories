import React, { useContext, useState, useRef, useEffect } from 'react'
import { View, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import { GlobalContext, StoriesContext, ProgressContext } from 'react-stories-common';
import Story from './Story'
import ProgressArray from './ProgressArray'
import { GlobalCtx, StoriesContext as StoriesContextInterface } from 'react-stories-common/dist/types'

const Container: React.FC = function () {
  const [currentId, setCurrentId] = useState<number>(0)
  const [pause, setPause] = useState<boolean>(true)
  const [bufferAction, setBufferAction] = useState<boolean>(true)
  const [videoDuration, setVideoDuration] = useState<number>(0)

  let mousedownId = useRef<any>();
  let isMounted = useRef<boolean>(true);

  const { width, height, loop, currentIndex, isPaused, preventDefault, storyContainerStyles = {} } = useContext<GlobalCtx>(GlobalContext);
  const { stories } = useContext<StoriesContextInterface>(StoriesContext);

  useEffect(() => {
    if (typeof currentIndex === 'number') {
      if (currentIndex >= 0 && currentIndex < stories.length) {
        setCurrentIdWrapper(() => currentIndex)
      } else {
        console.error('Index out of bounds. Current index was set to value more than the length of stories array.', currentIndex)
      }
    }
  }, [currentIndex])

  useEffect(() => {
    if (typeof isPaused === 'boolean') {
      setPause(isPaused)
    }
  }, [isPaused])

  // Cleanup mounted state - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)
  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  const toggleState = (action: string, bufferAction?: boolean) => {
    setPause(action === 'pause')
    setBufferAction(!!bufferAction)
  }

  const setCurrentIdWrapper = (callback) => {
    setCurrentId(callback);
    toggleState('pause', true);
  }

  const previous = () => {
    setCurrentIdWrapper(prev => prev > 0 ? prev - 1 : prev)
  }

  const next = () => {
    if (isMounted.current) {
      if (loop) {
        updateNextStoryIdForLoop()
      } else {
        updateNextStoryId()
      }
    }
  };

  const updateNextStoryIdForLoop = () => {
    setCurrentIdWrapper(prev => (prev + 1) % stories.length)
  }

  const updateNextStoryId = () => {
    setCurrentIdWrapper(prev => {
      if (prev < stories.length - 1) return prev + 1
      return prev
    })
  }

  const debouncePause = (e: GestureResponderEvent) => {
    e.preventDefault()
    mousedownId.current = setTimeout(() => {
      toggleState('pause')
    }, 200)
  }

  const mouseUp = (type: string) => (e: GestureResponderEvent) => {
    e.preventDefault()
    mousedownId.current && clearTimeout(mousedownId.current)
    if (pause) {
      toggleState('play')
    } else {
      type === 'next' ? next() : previous()
    }
  }

  const getVideoDuration = (duration: number) => {
    setVideoDuration(duration * 1000)
  }

  return (
    <View style={{ ...storyContainerStyles, ...styles.container, ...{ width, height } } as StyleProp<ViewStyle>}>
      <ProgressContext.Provider value={{
        bufferAction: bufferAction,
        videoDuration: videoDuration,
        currentId,
        pause,
        next
      }}>
        <ProgressArray />
      </ProgressContext.Provider>
      <Story
        action={toggleState}
        bufferAction={bufferAction}
        playState={pause}
        story={stories[currentId]}
        getVideoDuration={getVideoDuration}
      />
      {!preventDefault && <View style={styles.overlay as StyleProp<ViewStyle>}>
        <View style={{ width: '50%', zIndex: 999 } as StyleProp<ViewStyle>} onTouchStart={debouncePause} onTouchEnd={mouseUp('previous')} />
        <View style={{ width: '50%', zIndex: 999 } as StyleProp<ViewStyle>} onTouchStart={debouncePause} onTouchEnd={mouseUp('next')} />
      </View>}
    </View>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#111',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: 'inherit',
    width: 'inherit',
    display: 'flex'
  }
}

export default Container;
