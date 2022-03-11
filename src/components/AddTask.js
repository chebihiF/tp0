import React, { useState } from 'react'

export const AddTask = () => {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [priority,setPriority] = useState(false)
    

  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Text</label>
            <input type='text' placeholder='Add Task'
            value={text} onChange={(e)=>setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day' 
            value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Priority</label>
            <input type='checkbox'
             value={priority} onChange={(e)=>setPriority(e.currentTarget.checked)} />
        </div>
        <input type='submit' value='Add Task' 
        className='btn btn-block'/>
    </form>
  )
}

