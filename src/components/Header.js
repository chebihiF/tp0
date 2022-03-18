import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({title,onShowForm}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
          text='Add' 
          color='green' 
          onShow={onShowForm} />
    </header>
  )
}

const headStyle = {   
    color: 'blue', 
    backgroundColor: 'beige'
}

Header.defaultProps = {
    title: 'Task Management'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
