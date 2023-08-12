import React,{useContext} from 'react'
import './AddTask.css'
import Selector from './Selector'
import { taskInfo } from './context/task_info'


const AddTask=()=> {
  const {task,setTask,desc,setDesc,setIsTask,data}=useContext(taskInfo)

  const Clicked=()=>{
    if(task.trim()==="" || desc.trim()===""){
      setIsTask(false)
    }

    else{
      setIsTask(true)
      data.push([task,desc])
      //how do I render the component multiple times
      //if i use a normal programming language syntax then I would use a for loop instead of map for 
      //better control and understandablity

    } 
  }

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
      <Selector text="Add" click={()=>Clicked()}/>
    </div>
    
    </>
  )
}

export default AddTask
