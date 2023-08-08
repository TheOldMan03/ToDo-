//This is the part where the name of the task and its description will be shown
import React from 'react'
import './TaskDesc.css'

function TaskDesc(){
  return (
    // some placeholder text and task will be present in it
    <div className='big-box'>
      <div className="task-content">
        Task No.
      </div>

      <div className='desc-content'>
        Task Desc
      </div>

    </div>
  )
}

export default TaskDesc
