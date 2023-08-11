//This is the part where the name of the task and its description will be shown
import React,{useContext} from 'react'
import {taskInfo} from './context/task_info'
import './TaskDesc.css'

function TaskDesc(){

  const {task,desc}=useContext(taskInfo)

  return (
    // some placeholder text and task will be present in it
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
