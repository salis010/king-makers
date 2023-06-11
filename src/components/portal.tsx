import React, { FC } from 'react'

export const Portal: FC = () => {
  return (
    <div style={{
      backgroundColor: 'RGB(0, 0, 0, 0.5)',
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100vh'
    }}
    />
  )
}
