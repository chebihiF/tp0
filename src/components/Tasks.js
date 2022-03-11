import React from 'react'
import { Task } from './Task'

export const Tasks = ({tasks, onDelete, OnUpdate}) => {
  return (
    <div>
        {tasks.map((task)=> (
            <Task key={task.id} 
                  task={task} 
                  onDeleteTask={onDelete}
                  onUpdateTask={OnUpdate}
                  />
        ))}
    </div>
  )
}
