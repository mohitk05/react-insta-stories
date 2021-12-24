import React, { useContext } from 'react'
import { ProgressProps, ProgressContext as ProgressContextType } from 'react-stories-common/dist/types'
import ProgressWrapper from './ProgressWrapper'
import { ProgressContext } from 'react-stories-common';
import { View } from 'react-native';

export default (props: ProgressProps) => {
  const { bufferAction, pause } = useContext<ProgressContextType>(ProgressContext)

  const getProgressStyle = ({ active }) => {
    switch (active) {
      case 2:
        return { width: '100%' }
      case 1:
        return { transform: `scaleX(${props.count / 100})` }
      case 0:
        return { width: 0 }
      default:
        return { width: 0 }
    }
  }

  const { width, active } = props
  return (
    <ProgressWrapper width={width} pause={pause} bufferAction={bufferAction}>
      <View
        style={{ ...getProgressStyle({ active }), ...styles.inner }} />
    </ProgressWrapper>
  )
}

const styles: any = {
  inner: {
    background: '#fff',
    height: '100%',
    maxWidth: '100%',
    borderRadius: 2,
    transformOrigin: 'center left',

    WebkitBackfaceVisibility: 'hidden',
    MozBackfaceVisibility: 'hidden',
    msBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',

    WebkitPerspective: 1000,
    MozPerspective: 1000,
    msPerspective: 1000,
    perspective: 1000
  }
}
