import './App.css';
import Selector from './components/Selector';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className='main-div'> {/* this is the main div */}

      <div className='stuff-div'>

        <div className='button-side'>
          <Selector text="Reminders"/>
          <Selector text="To Do"/>
          <Selector text="Shopping List"/>
        </div>

        <div className="inputfield">
          <AddTask/>
        </div>

        <div className="addbutton">
          <Selector text="Add Button"/>
        </div>
    
      </div>

    </div>
  );
}

export default App;
