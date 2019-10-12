import React from 'react'
import { ProgressProps } from './../interfaces'
import ProgressWrapper from './ProgressWrapper'

export default class Progress extends React.PureComponent<ProgressProps, { duration: number }> {
    inner: HTMLDivElement

    componentDidMount() {
        if (this.inner) {
            this.inner.addEventListener('webkitAnimationEnd', this.next, false)
            this.inner.addEventListener('animationend', this.next, false)
            this.inner.addEventListener('oanimationend', this.next, false)
        }
    }

    static getDerivedStateFromProps(props, state) {
        let current = props.currentStory
        if (typeof current === 'object') {
            if (current.type && props.videoDuration) return { duration: props.videoDuration * 1000 }
            if (current.duration) return { duration: current.duration }
            return { duration: props.defaultInterval }
        } else {
            return { duration: props.defaultInterval }
        }
    }

    next = () => {
        this.props.next()
    }

    render() {
        const { width, pause, bufferAction, active } = this.props
        return (
            <ProgressWrapper width={width} pause={pause} bufferAction={bufferAction}>
                <div
                    ref={r => { this.inner = r }}
                    className={styles.inner}
                    style={getProgressStyle({ active, pause, duration: this.state.duration })} />
            </ProgressWrapper>
        )
    }
}

const animation = (duration) => `${duration}ms linear 0ms ${styles.slidein}`
const animationPlayState = (pause) => pause ? 'paused' : 'running'

const getProgressStyle = ({ active, duration, pause }) => {
    switch (active) {
        case 2:
            return { width: '100%' }
        case 1:
            return { animation: animation(duration), animationPlayState: animationPlayState(pause) }
        case 0:
            return { width: 0 }
        default:
            return { width: 0 }
    }
}

const styles: any = {
    inner: {
        background: '#fff',
        height: '100%',
        maxWidth: '100%',
        transformOrigin: 'center left',

        '-webkit-backface-visibility': 'hidden',
        '-moz-backface-visibility': 'hidden',
        '-ms-backface-visibility': 'hidden',
        backfaceVisibility: 'hidden',

        '-webkit-perspective': 1000,
        '-moz-perspective': 1000,
        '-ms-perspective': 1000,
        perspective: 1000
    }
}