import './App.css';
import AddTask from './components/AddTask';
import TaskDesc from './components/TaskDesc';
import { taskInfo } from './components/context/task_info';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")

  const [isTask,setIsTask]=useState(false)

  const [data,setData]=useState({values:[]});

  

  // [
  //   {task:"",desc:"",isTask:0},
  //   {task:"",desc:"",isTask:0}
  // ]

  return (
    <div className='main-div'> {/* this is the main div */}

      <div className='stuff-div'>

        <taskInfo.Provider value={{ task, setTask, desc, setDesc,isTask,setIsTask,data,setData }}>
          <div className="inputfield">
            <AddTask />
          </div>

        
         
          {/* I should somehow render TaskDesc over here */}

        </taskInfo.Provider>

      </div>

    </div>
  );
}

export default App;