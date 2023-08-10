import React,{useState} from 'react'
import './AddTask.css'
import Selector from './Selector'

function AddTask() {

  const [task,setTask]=useState("")
  const [desc,setDesc]=useState("")

  function Clicked(task,desc){
    if(task==="" || desc===""){
      console.log("The one of the inputs are empty must fill it")
    }

    else{
      console.log("You have successfully added the inputs")
    }
  }

  return (
    <>
    <div className='taskdiv'>
      <form className='taskform'>
        <label className='tname'>Task 1</label>
        <input type="text" placeholder='Enter Task Name' className='t-input' value={task} onChange={(e)=>setTask(e.target.value)} />
      </form>
    </div>

    <div className='taskdiv'>
      <form className='taskform'>
        <label className='tname'>Task Description</label>
        <input type="text" placeholder='Enter Task Description' className='d-input' value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      </form>
    </div>

    <div className="addbutton">
        <Selector text="Add Button" click={()=>Clicked(task,desc)}/>  
    </div>
    
    </>
  )
}

export default AddTask
