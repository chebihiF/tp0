import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { useState } from 'react';
import { AddTask } from './components/AddTask';



function App() {

  const [tasks,setTask] = useState([
    {
        id: 1,
        text: 'learn react js',
        day : '03 04 2022',
        priority: true
    },
    {
        id: 2,
        text: 'learn react Native',
        day : '10 04 2022',
        priority: false
    },
    {
        id: 3,
        text: 'learn Angular',
        day : '01 05 2022',
        priority: false
    },
    {
        id: 4,
        text: 'learn Spring Boot',
        day : '03 08 2022',
        priority: true
    }
  ])

  //delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task)=>task.id != id))
  }

  //change priority
  const changePriority = (id) => {
    setTask(
      tasks.map((task)=>(
        task.id == id 
        ? {...task, priority : !task.priority} : task
      ))
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} 
               onDelete={deleteTask}
               OnUpdate={changePriority} />
        : 'No Tasks to Show'
      }
      
    </div>
  );
}

export default App;
