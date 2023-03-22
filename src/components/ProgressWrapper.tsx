import React, { useContext } from 'react'
import { ProgressWrapperProps, GlobalCtx } from './../interfaces'
import GlobalContext from "./../context/Global";

const ProgressWrapper = (props: ProgressWrapperProps) => {
    const globalContext = useContext<GlobalCtx>(GlobalContext);

    return (
        <div style={{
            ...styles.progress, 
            ...globalContext.progressStyles, 
            ...getProgressWrapperStyle(props) 
        }}>
            {props.children}
        </div>
    )
}

const getProgressWrapperStyle = ({ width }) => ({
    width: `${width * 100}%`,
})

const styles = {
    progress: {
        height: 2,
        maxWidth: '100%',
        background: '#555',
        margin: 2,
        borderRadius: 2,
        WebkitBackfaceVisibility: 'hidden' as const,
        MozBackfaceVisibility: 'hidden' as const,
        msBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden' as const,
    }
}

export default ProgressWrapper