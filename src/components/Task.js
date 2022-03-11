import React from 'react'
import {FaTimes, FaTimesCircle} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'

export const Task = ({task}) => {
  return (
      <div className='task'>
        <h3>
          {task.text} 
          <BsFillTrashFill style={{color:'red', cursor:'pointer'}}/>  
        </h3>
        <p>{task.day}</p>
      </div>
  )
}
