import React from 'react'
import './AddTask.css'

function AddTask() {
  return (
    <>
    <div className='taskdiv'>
      <form className='taskform'>
        <label className='tname'>Task 1</label>
        <input type="text" placeholder='Enter Task Name' className='t-input' />
      </form>
    </div>

    <div className='taskdiv'>
      <form className='taskform'>
        <label className='tname'>Task Description</label>
        <input type="text" placeholder='Enter Task Description' className='d-input' />
      </form>
    </div>
    
    </>
  )
}

export default AddTask
