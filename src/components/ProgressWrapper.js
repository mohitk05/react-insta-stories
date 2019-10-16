import React from 'react'
import PropTypes from 'prop-types'
import style from './../styles.css'

const ProgressWrapper = (props) => (
  <div className={style.autoHide} style={{ ...styles.progress, ...getProgressWrapperStyle(props) }}>
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
    background: '#555',
    margin: 2
  }
}

ProgressWrapper.propTypes = {
  children: PropTypes.node
}

export default ProgressWrapper
