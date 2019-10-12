import React from 'react'
import Progress from './Progress'
import { ProgressArrayProps } from './../interfaces'

export default class ProgressArray extends React.Component<ProgressArrayProps> {
    render() {
        return (
            <div style={styles.progressArr}>
                {this.props.numArray.map((i, index) =>
                    <Progress
                        key={index}
                        width={1 / this.props.numArray.length}
                        next={this.props.next}
                        videoDuration={this.props.videoDuration}
                        currentStory={this.props.currentStory}
                        active={i === this.props.progress.id ? 1 : (i < this.props.progress.id ? 2 : 0)}
                        pause={this.props.pause}
                        bufferAction={this.props.bufferAction}
                    />)}
            </div>
        )
    }
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
        filter: 'drop-shadow(0 1px 8px #000)'
    }
}