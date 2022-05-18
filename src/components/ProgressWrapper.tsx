import React from 'react'
import { ProgressWrapperProps } from './../interfaces'

const ProgressWrapper = (props: ProgressWrapperProps) => (
    <div style={{ ...styles.progress, ...getProgressWrapperStyle(props) }}>
        {props.children}
    </div>
)

const getProgressWrapperStyle = ({ width, pause, bufferAction }) => ({
    width: `${width * 100}%`,
    opacity: pause && !bufferAction ? 0 : 1
})

const styles = {
    progress: {
        height: 2,
        maxWidth: '100%',
        background: '#E0E0E0',
        margin: 2,
        borderRadius: 2,
        transition: 'opacity 400ms ease-in-out'
    }
}

export default ProgressWrapper