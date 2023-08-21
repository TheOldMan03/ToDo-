import React,{useContext} from 'react'
import './AddTask.css'
import Selector from './Selector'
import { taskInfo } from './context/task_info'


const AddTask=()=> {
  const {task,setTask,desc,setDesc,data,setData,setIsClicked}=useContext(taskInfo)

  //here data is an array...the console log treats data as an array 
  //but the app function thinks the array is empty

  const Clicked=()=>{
    if(task.trim()==="" || desc.trim()===""){
      //if the input fields are actually empty then it should give a warning 
      //that the input fields are empty
    }

    else{
      
      const TI={task:task,desc:desc}
      data.push(TI)
      setData(data)
      
      setTask("")
      setDesc("")
      
      console.log(data)
    
      //if the data is successfully pushed
      //then the input fields should be set to empty strings
      //and the value of task and desc should also be set to empty string for the 
      //next task


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
