import React, { useContext, useState, useEffect, useRef, CSSProperties } from 'react'
import Progress from './Progress'
import { ProgressContext as ProgressContextType, GlobalCtx, StoriesContext as StoriesContextType } from 'react-stories-common/dist/types'
import { GlobalContext, StoriesContext, ProgressContext } from 'react-stories-common';

export default () => {
    const [count, setCount] = useState<number>(0)
    const { currentId, next, videoDuration, pause } = useContext<ProgressContextType>(ProgressContext)
    const { defaultInterval, onStoryEnd, onStoryStart, onAllStoriesEnd } = useContext<GlobalCtx>(GlobalContext);
    const { stories } = useContext<StoriesContextType>(StoriesContext);

    useEffect(() => {
        setCount(0)
    }, [currentId, stories])

    useEffect(() => {
        if (!pause) {
            animationFrameId.current = requestAnimationFrame(incrementCount)
        }
        return () => {
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [currentId, pause])

    let animationFrameId = useRef<number>()

    let countCopy = count;
    const incrementCount = () => {
        if (countCopy === 0) storyStartCallback()
        setCount((count: number) => {
            const interval = getCurrentInterval()
            countCopy = count + (100 / ((interval / 1000) * 60))
            return count + (100 / ((interval / 1000) * 60))
        })
        if (countCopy < 100) {
            animationFrameId.current = requestAnimationFrame(incrementCount)
        } else {
            storyEndCallback();
            if (currentId === stories.length - 1) {
                allStoriesEndCallback();
            }
            cancelAnimationFrame(animationFrameId.current);
            next();
        }
    }

    const storyStartCallback = () => {
        onStoryStart && onStoryStart(currentId, stories[currentId])
    }

    const storyEndCallback = () => {
        onStoryEnd && onStoryEnd(currentId, stories[currentId])
    }

    const allStoriesEndCallback = () => {
        onAllStoriesEnd && onAllStoriesEnd(currentId, stories)
    }

    const getCurrentInterval = () => {
        if (stories[currentId].type === 'video') return videoDuration
        if (typeof stories[currentId].duration === 'number') return stories[currentId].duration
        return defaultInterval
    }

    return (
        <div style={styles.progressArr as CSSProperties}>
            {stories.map((_, i) =>
                <Progress
                    key={i}
                    count={count}
                    width={1 / stories.length}
                    active={i === currentId ? 1 : (i < currentId ? 2 : 0)}
                />)}
        </div>
    )
}

const styles = {
    progressArr: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100%',
        flexWrap: 'row',
        position: 'absolute',
        width: '98%',
        padding: 5,
        paddingTop: 7,
        alignSelf: 'center',
        zIndex: 99,
        filter: 'drop-shadow(0 1px 8px #222)'
    }
}