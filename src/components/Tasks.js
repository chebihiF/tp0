import React from 'react'
import { Task } from './Task'

export const Tasks = ({tasks}) => {
  return (
    <div>
        {tasks.map((task)=> (
            <Task key={task.id} task={task} />
        ))}
    </div>
  )
}
