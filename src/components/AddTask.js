import React,{useContext} from 'react'
import './AddTask.css'
import Selector from './Selector'
import { taskInfo } from './context/task_info'


function AddTask() {

  const {task,setTask,desc,setDesc}=useContext(taskInfo)

  return (
    <>
    <div className='taskdiv'>
      <form className='taskform'>
        <label className='tname'>Task 1</label>
        <input type="text" placeholder='Enter Task Name' className='t-input' value={task} onChange={(e)=>setTask(e.target.value)}/>
      </form>
    </div>

    <div className='taskdiv'>
      <form className='taskform'>
        <label className='tname'>Task Description</label>
        <input type="text" placeholder='Enter Task Description' className='d-input' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      </form>
    </div>

    <div className="addbutton">
        <Selector text="Add Button"/>  
    </div>
    
    </>
  )
}

export default AddTask
