import React from 'react'

export const Button = ({text,color}) => {

    const testClick = () => {
        alert("test")
    }

  return (
    <button style={{backgroundColor : color}} 
    className='btn' onClick={testClick}>{text}</button>
  )
}
