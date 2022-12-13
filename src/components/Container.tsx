import React, { useContext, useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react'
import GlobalContext from './../context/Global'
import StoriesContext from './../context/Stories'
import ProgressContext from './../context/Progress'
import Story from './Story'
import ProgressArray from './ProgressArray'
import { GlobalCtx, StoriesContext as StoriesContextInterface } from './../interfaces'

export default function () {
    const [currentId, setCurrentId] = useState<number>(0)
    const [pause, setPause] = useState<boolean>(true)
    const [bufferAction, setBufferAction] = useState<boolean>(true)
    const [videoDuration, setVideoDuration] = useState<number>(0)

    let mousedownId = useRef<any>();
    let isMounted = useRef<boolean>(true);

    const { width, height, loop, currentIndex, isPaused, keyboardNavigation, preventDefault, storyContainerStyles = {}, onAllStoriesEnd } = useContext<GlobalCtx>(GlobalContext);
    const { stories } = useContext<StoriesContextInterface>(StoriesContext);

    useEffect(() => {
        if (typeof currentIndex === 'number') {
            if (currentIndex >= 0 && currentIndex < stories.length) {
                setCurrentId(() => currentIndex)
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

    useEffect(() => {
        const isClient = (typeof window !== 'undefined' && window.document);
        if (isClient && (typeof keyboardNavigation === 'boolean' && keyboardNavigation)) {
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            }
        }
    }, [keyboardNavigation]);

    // Cleanup mounted state - for issue #130 (https://github.com/mohitk05/react-insta-stories/issues/130)
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    function isTouchDevice() {
        return 'ontouchstart' in window        // works on most browsers
            || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            previous()
        }
        else if (e.key === 'ArrowRight') {
            next()
        }
    }

    const toggleState = (action: string, bufferAction?: boolean) => {
        setPause(action === 'pause')
        setBufferAction(!!bufferAction)
    }

    const previous = () => {
        if(currentId !== 0){
            setCurrentId(prev =>  prev - 1)
        }
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
        setCurrentId(prev => (prev + 1) % stories.length)
    }

    const updateNextStoryId = () => {
        if(currentId < stories.length - 1){
            setCurrentId(prev => prev + 1)
        } else{
            onAllStoriesEnd()
        }
    }

    const debouncePause = (e: MouseEvent | TouchEvent) => {
        if (isTouchDevice() && e.nativeEvent instanceof MouseEvent) {
            return
        }

        e.preventDefault()
        mousedownId.current = setTimeout(() => {
            toggleState('pause')
        }, 200)
    }

    const mouseUp = (type: string) => (e: MouseEvent | TouchEvent) => {
        if (isTouchDevice() && e.nativeEvent instanceof MouseEvent) {
            return
        }

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
        <div style={{ ...styles.container, ...storyContainerStyles, ...{ width, height } }}>
            <ProgressContext.Provider value={{
                bufferAction: bufferAction,
                videoDuration: videoDuration,
                currentId,
                pause: pause,
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
            {!preventDefault && <div style={styles.overlay}>
              <div style={{ width: '50%', zIndex: 999 }} onTouchStart={debouncePause} onTouchEnd={mouseUp('previous')} onMouseDown={debouncePause} onMouseUp={mouseUp('previous')} />
              <div style={{ width: '50%', zIndex: 999 }} onTouchStart={debouncePause} onTouchEnd={mouseUp('next')} onMouseDown={debouncePause} onMouseUp={mouseUp('next')} />
            </div>}
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
