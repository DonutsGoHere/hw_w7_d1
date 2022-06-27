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

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value);
  }

  const addNewTask = (evt) => {
    evt.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks)
    setNewTask("")
  }

  return (
    <div className="App">
      <h1>To-Do</h1>
      <ul>
        {taskNodes}
      </ul>
      <form onSubmit={addNewTask}>
        <label>Add new task To-Do:</label>
        <input id="new_task" type="text" value={newTask} onChange={handleTaskInput} />
        <input type="submit" value="Add new task"/>
      </form>
    </div>
  );
}

export default App;
