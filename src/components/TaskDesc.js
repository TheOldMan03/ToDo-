//This is the part where the name of the task and its description will be shown
import React from 'react'
import './TaskDesc.css'

function TaskDesc({task,desc}){

  return (
    <div className='big-box'>
      <div className="task-content">
        {task}
      </div>

      <div className='desc-content'>
        {desc}
      </div>

    </div>
  )
}

export default TaskDesc
