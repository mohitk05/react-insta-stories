import React, { useContext, useState, useRef, useEffect } from 'react'
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

    const { width, height, loop, currentIndex, isPaused, keyboardNavigation } = useContext<GlobalCtx>(GlobalContext);
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

    useEffect(() => {
        const isClient = (typeof window !== 'undefined' && window.document);
        if (isClient && (typeof keyboardNavigation === 'boolean' && keyboardNavigation)) {
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            }
        }
    }, [keyboardNavigation])

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

    const setCurrentIdWrapper = (callback) => {
        setCurrentId(callback);
        toggleState('pause', true);
    }

    const previous = () => {
        setCurrentIdWrapper(prev => prev > 0 ? prev - 1 : prev)
    }

    const next = () => {
        if (loop) {
            updateNextStoryIdForLoop()
        } else {
            updateNextStoryId()
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