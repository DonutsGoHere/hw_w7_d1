import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {name:"Buy Shopping", highPriority: false},
    {name:"Clean Bathroom", highPriority: false},
    {name:"Car's MOT", highPriority: true}
  ]);

  const [newTask, setNewTask] = useState("");

  const [newPriority, setNewPriority] = useState("")

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} className={task.highPriority ? "high-priority":"low-priority"}>
        <span>{task.name}</span>

        {task.highPriority ? <span className="high-priority">High Priority!</span> : <label>low priority</label>}
      </li>
    )
  })

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value);
  }

  const handlePriorityInput = (evt) => {
    setNewPriority(evt.target.value);
  }

  const addNewTask = (evt) => {
    evt.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, highPriority: newPriority});
    setTasks(copyTasks);
    setNewTask("");
    setNewPriority("");
  }

  // const addNewPriority = (evt) => {
  //   evt.preventDefault();
  //   const copyTasks = [...tasks];
  //   copyTasks.push({name: newTask, highPriority: newPriority});
  //   setTasks(copyTasks);
  //   setNewPriority("");
  // }

  return (
    <div className="App">
      <div><h1>To-Do</h1></div>
      <hr></hr><div><form onSubmit={addNewTask}>
        <label>Add new task To-Do:</label>
        <input id="new_task" type="text" value={newTask} onChange={handleTaskInput}/>
        <input type="submit" value="Add new task"/>
        <label>high</label><input type="radio" value="high-priority" onChange={handlePriorityInput}/>
        <label>low</label><input type="radio" value="low-priority" onChange={handlePriorityInput}/>
      </form></div>
      <hr></hr>
      <div><ul>
        {taskNodes}
      </ul></div>
      
    </div>
  );
}

export default App;
