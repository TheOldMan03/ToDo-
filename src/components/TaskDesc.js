//This is the part where the name of the task and its description will be shown
import React, { useContext } from 'react'
import { taskInfo } from './context/task_info'
import './TaskDesc.css'

function TaskDesc({task,desc,id}){

  const {data,setData}=useContext(taskInfo)

  function Click(id){
    const new_data=data.filter(x=>x.id!==id);
    setData(new_data);

    console.log(new_data)
  }

  return (
    <div className='big-box'>
      <div className="task-content">
        {task}
      </div>

      <div className='buttonbox'>
        <button className='delete' onClick={()=>Click(id)}>X</button>
      </div>

      <div className='desc-content'>
        {desc}
      </div>

    </div>
  )
}

export default TaskDesc
