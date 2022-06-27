import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    "Buy Shopping",
    "Clean Bathroom",
    "Car's MOT"
  ]);

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index}>
        {task}
      </li>
    )
  })

  return (
    <div className="App">
      <ul>
        {taskNodes}
      </ul>
      <form>
        <label>Add new task To-Do:</label>
        <input></input>
        <input></input>
      </form>
      <button>Add task</button>
    </div>
  );
}

export default App;
