import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {name:"Buy Shopping", highPriority: false},
    {name:"Clean Bathroom", highPriority: false},
    {name:"Car's MOT", highPriority: true}
  ]);

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} className={task.highPriority ? "high-priority":"low-priority"}>
        <span>{task.name}</span>

        {task.highPriority ? <span className="high-priority">High Priority!</span> : <label onClick={() => changePriority(index)}>low priority</label>}

        <span>{task.highPriority}</span>
      </li>
    )
  })

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value);
  }

  const addNewTask = (evt) => {
    evt.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, highPriority: false});
    setTasks(copyTasks);
    setNewTask("")
  }

  const changePriority = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].highPriority = true;
    setTasks(copyTasks)
  }

  return (
    <div className="App">
      <div><h1>To-Do</h1></div>
      <hr></hr>
      <div><ul>
        {taskNodes}
      </ul></div>
      <div><form onSubmit={addNewTask}>
        <div><label>Add new task To-Do:</label></div>
        <div><input id="new_task" type="text" value={newTask} onChange={handleTaskInput}/></div>
        <div><input type="submit" value="Add new task"/></div>
        <div><label>high</label><input type="radio" value="high-priority" checked={tasks.highPriority === true} onChange={changePriority}/></div>
        <div><label>low</label><input type="radio" value="low-priority" checked={tasks.highPriority === false} onChange={changePriority}/></div>
      </form></div>
    </div>
  );
}

export default App;
