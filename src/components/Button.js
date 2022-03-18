import React from 'react'

export const Button = ({text,color,onShow}) => {
  return (
    <button style={{backgroundColor : color}} 
    className='btn' onClick={onShow}>{text}</button>
  )
}
