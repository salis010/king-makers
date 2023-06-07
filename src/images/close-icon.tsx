import React, { FC } from 'react'

interface ICloseIcon {
  isDefaultColor?: boolean
  isSmall?: boolean
}
export const CloseIcon: FC<ICloseIcon> = ({ isDefaultColor = true, isSmall = false }) => {
  const color = isDefaultColor ? '#a40537' : '#FFF'
  const dimension = isSmall ? '16px' : '24px'

  return (
    <svg
      style={{ outline: 'none' }}
      version='1.1'
      id='Layer_1'
      width={dimension}
      height={dimension}
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
      tabIndex={0}
    >
      <g id='XMLID_1_'>
        <path
          fill={color}
          id='XMLID_5_'
          d='M256,0C113.6,0,0,113.6,0,256s113.6,256,256,256s256-113.6,256-256S398.4,0,256,0z M384.5,348.2l-35.4,35.4 L256,291.4l-92.2,92.2l-36.3-35.4l92.2-92.2l-92.2-92.2l36.3-35.4l92.2,92.2l92.2-92.2l35.4,35.4L291.4,256L384.5,348.2 L384.5,348.2z'
        />
      </g>
    </svg>

  )
}
