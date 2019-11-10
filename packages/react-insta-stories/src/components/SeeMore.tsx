import React from 'react'
import { SeeMoreProps } from './../interfaces'
// import up from './../up.png'

export default function seeMore(props: SeeMoreProps) {
    const SeeMoreContent = props.seeMoreContent
    return (
        props.showContent
            ? <div style={styles.seeMoreExpanded}>
                <SeeMoreContent close={() => props.toggleMore(false)} />
            </div>
            : <div onClick={() => {
                props.toggleMore(true)
            }} style={styles.seeMore}>
                <span style={styles.seeMoreIcon}>⌃</span>
                <span style={styles.seeMoreText}>See more</span>
            </div>
    )
}

const styles: any = {
    seeMore: {
        height: "10vh",
        background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        bottom: 0
    },
    seeMoreExpanded: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        zIndex: 99999
    },
    seeMoreText: {
        color: "white",
        textAlign: "center",
        letterSpacing: "0.1em",
        marginBottom: "2.2vh",
        textTransform: "capitalize",
        opacity: "1",
        fontSize: "0.8em",
        transition: "opacity 300ms ease-in-out"
    },
    seeMoreIcon: {
        color: "white",
        textAlign: "center",
        letterSpacing: "0.2em",
        marginBottom: "0.4vh",
        opacity: "1",
        filter: "drop-shadow(0 0 5px black)",
        textTransform: "capitalize",
        transition: "opacity 300ms ease-in-out"
    },
    seeMoreClose: {
        position: "absolute",
        filter: "drop-shadow(0 3px 2px #ccc)",
        right: "0.5rem",
        top: "0.5rem",
        fontSize: "1.5rem",
        opacity: "0.7",
        padding: "1rem"
    }
}