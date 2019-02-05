import React from 'react'
import PropTypes from 'prop-types'

const header = props => {
  return <div style={styles.main}>
    <div><img style={styles.img} src='https://picsum.photos/1080/1920' /></div>
    <div style={styles.text}>
      <p style={styles.heading}>{props.heading}</p>
      <p style={styles.subheading}>{props.subheading}</p>
    </div>
  </div>
}

const styles = {
  main: {
    display: 'flex'
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginRight: 5,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.5))'
  },
  heading: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.8)'
  },
  subheading: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.8)'
  }
}

header.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.subheading
}

export default header
