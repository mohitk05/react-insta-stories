import React from 'react'
import { SeeMoreProps } from './../interfaces'
// import up from './../up.png'

export default function seeMore(props: SeeMoreProps) {
    return (
        props.showContent
            ? <div className={styles.seeMoreExpanded}>
                {props.seeMoreContent}
                <div onClick={() => {
                    props.toggleMore(false)
                    props.action('play')
                }} className={styles.seeMoreClose}><span>✕</span></div>
            </div>
            : <div onClick={() => {
                props.toggleMore(true)
                props.action('pause')
            }} className={styles.seeMore}>
                <span className={styles.seeMoreIcon}>⌃</span>
                <span className={styles.seeMoreText}>Read more</span>
            </div>
    )
}

const styles: any = {
    seeMore: {
        height: "10vh",
        background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    seeMoreExpanded: {
        position: 'fixed',
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
        letterSpacing: "0.2em",
        marginBottom: "2.2vh",
        textTransform: "capitalize",
        opacity: "0.6",
        fontSize: "0.7em",
        transition: "opacity 300ms ease-in-out"
    },
    seeMoreIcon: {
        color: "white",
        textAlign: "center",
        letterSpacing: "0.2em",
        marginBottom: "0.5vh",
        opacity: "0.6",
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