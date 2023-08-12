import './App.css';
import Selector from './components/Selector';
import AddTask from './components/AddTask';
import TaskDesc from './components/TaskDesc';
import {taskInfo} from './components/context/task_info';
import {useState} from 'react';

function App() {
  const [task,setTask]=useState("")
  const [desc,setDesc]=useState("")

  const data=[]

  
  return (
    <div className='main-div'> {/* this is the main div */}

      <div className='stuff-div'>

        <div className='button-side'>
          <Selector text="Reminders"/>
          <Selector text="To Do"/>
          <Selector text="Shopping List"/>
        </div>


        <taskInfo.Provider value={{task,setTask,desc,setDesc,data}}>
          <div className="inputfield">
            <AddTask/>
          </div>

          {data.map(e=><TaskDesc task={e[0]} desc={e[1]}/>)}

          {/* I should somehow render TaskDesc over here */}

        </taskInfo.Provider>

      </div>

    </div>
  );
}

export default App;
