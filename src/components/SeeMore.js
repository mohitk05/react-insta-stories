import React from 'react'
import PropTypes from 'prop-types'
import style from './../styles.css'
import up from './../up.png'

export default function seeMore(props) {
  return (
    props.showContent
      ? <div className={style.seeMoreExpanded}>
        {props.seeMoreContent}
        <div onClick={() => {
          props.toggleMore(false)
          props.action('play')
        }} className={style.seeMoreClose}><span>✕</span></div>
      </div>
      : <div onClick={() => {
        props.toggleMore(true)
        props.action('pause')
      }} className={style.seeMore}>
        <span className={style.seemoreIcon}><img src={up} /></span>
        <span className={style.seemoreText}>Read more</span>
      </div>
  )
}

seeMore.propTypes = {
  seeMoreContent: PropTypes.object,
  showContent: PropTypes.bool,
  action: PropTypes.func,
  toggleMore: PropTypes.func
}
