import React, { useContext, useState, useRef, useEffect } from 'react'
import GlobalContext from './../context/Global'
import ProgressContext from './../context/Progress'
import Story from './Story'
import ProgressArray from './ProgressArray'
import { GlobalCtx } from './../interfaces'

export default function () {
    const [currentId, setCurrentId] = useState<number>(0)
    const [pause, setPause] = useState<boolean>(true)
    const [count, setCount] = useState<number>(0)
    const [bufferAction, setBufferAction] = useState<boolean>(true)
    const [videoDuration, setVideoDuration] = useState<number>(0)

    let mousedownId = useRef<NodeJS.Timeout>()
    let animationFrameId = useRef<number>()

    const { width, height, defaultInterval, stories, loop, currentIndex, isPaused, onStoryStart, onStoryEnd, onAllStoriesEnd } = useContext<GlobalCtx>(GlobalContext)

    useEffect(() => {
        if (!pause) {
            animationFrameId.current = requestAnimationFrame(incrementCount)
        }
        return () => {
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [currentId, pause])

    useEffect(() => {
        setCount(0)
    }, [currentId, stories])

    useEffect(() => {
        if (typeof currentIndex === 'number') {
            if (currentIndex >= 0 && currentIndex < stories.length) {
                setCurrentId(currentIndex)
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

    const incrementCount = () => {
        setCount((count: number) => {
            if (count === 0) storyStartCallback()
            const interval = getCurrentInterval()
            if (count < 100) {
                animationFrameId.current = requestAnimationFrame(incrementCount)
            } else {
                storyEndCallback()
                if (currentId === stories.length - 1) {
                    allStoriesEndCallback()
                }
                next()
            }
            return count + (100 / ((interval / 1000) * 60))
        })
    }

    const storyStartCallback = () => {
        onStoryStart && onStoryStart(currentId, stories[currentId])
    }

    const storyEndCallback = () => {
        onStoryEnd && onStoryEnd(currentId, stories[currentId])
    }

    const allStoriesEndCallback = () => {
        onAllStoriesEnd && onAllStoriesEnd()
    }

    const getCurrentInterval = () => {
        if (stories[currentId].type === 'video') return videoDuration
        if (typeof stories[currentId].duration === 'number') return stories[currentId].duration
        return defaultInterval
    }

    const toggleState = (action: string, bufferAction?: boolean) => {
        setPause(action === 'pause')
        setBufferAction(!!bufferAction)
    }

    const previous = () => {
        if (currentId > 0) {
            setCurrentId(currentId - 1)
            setCount(0)
        }
    }

    const next = () => {
        if (loop) {
            updateNextStoryIdForLoop()
        } else {
            updateNextStoryId()
        }
    };

    const updateNextStoryIdForLoop = () => {
        setCurrentId((currentId + 1) % stories.length)
        setCount(0)
    }

    const updateNextStoryId = () => {
        if (currentId < stories.length - 1) {
            setCurrentId(currentId + 1)
            setCount(0)
        }
    }

    const debouncePause = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault()
        mousedownId.current = setTimeout(() => {
            toggleState('pause')
        }, 200)
    }

    const mouseUp = (e: React.MouseEvent | React.TouchEvent, type: string) => {
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
        <div style={{ ...styles.container, ...{ width, height } }}>
            <ProgressContext.Provider value={{
                bufferAction: bufferAction,
                videoDuration: videoDuration,
                numArray: stories.map((_, i) => i),
                currentStory: stories[currentId],
                currentId,
                count,
                pause
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
            <div style={styles.overlay}>
                <div style={{ width: '50%', zIndex: 999 }} onTouchStart={debouncePause} onTouchEnd={e => mouseUp(e, 'previous')} onMouseDown={debouncePause} onMouseUp={(e) => mouseUp(e, 'previous')} />
                <div style={{ width: '50%', zIndex: 999 }} onTouchStart={debouncePause} onTouchEnd={e => mouseUp(e, 'next')} onMouseDown={debouncePause} onMouseUp={(e) => mouseUp(e, 'next')} />
            </div>
        </div>
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