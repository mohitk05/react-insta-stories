import React, { useContext, useState, useRef } from 'react'
import GlobalContext from './../context/Global'
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

    const { width, height, defaultInterval, stories, loop } = useContext<GlobalCtx>(GlobalContext)

    const toggleState = (action: string, bufferAction?: boolean) => {
        setPause(action === 'pause')
        setBufferAction(bufferAction)
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
        setVideoDuration(duration)
    }

    return (
        <div style={{ ...styles.container, ...{ width, height } }}>
            <ProgressArray
                next={next}
                pause={pause}
                bufferAction={bufferAction}
                videoDuration={videoDuration}
                numArray={stories.map((_, i) => i)}
                currentStory={stories[currentId]}
                progress={{ id: currentId }}
            />
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