import React from 'react'
import PropTypes from 'prop-types'

const header = props => {
  return <div style={styles.main}>
    {props.profileImage && <div><img style={styles.img} src={props.profileImage} /></div>}
    <span style={styles.text}>
      <p style={styles.heading}>{props.heading}</p>
      <p style={styles.subheading}>{props.subheading}</p>
    </span>
  </div>
}

const styles = {
  main: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
  },
  heading: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  subheading: {
    fontSize: '0.6rem',
    color: 'rgba(255, 255, 255, 0.8)'
  }
}

header.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  profileImage: PropTypes.string
}

export default header
