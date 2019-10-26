import React, { useContext } from 'react'
import Progress from './Progress'
import { ProgressContext } from './../interfaces'
import ProgressCtx from './../context/Progress'

export default () => {
    const { numArray, currentId } = useContext<ProgressContext>(ProgressCtx)
    return (
        <div style={styles.progressArr}>
            {numArray.map(i =>
                <Progress
                    key={i}
                    width={1 / numArray.length}
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