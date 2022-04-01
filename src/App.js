import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { useEffect, useState } from 'react';
import { AddTask } from './components/AddTask';



function App() {

  const [showForm,setShowForm] = useState(false)

  const [tasks,setTask] = useState([])

  useEffect(()=>{
    const getData = async() =>{
      const taskFromserver = await getTaskFromServer()
      setTask(taskFromserver);
    }
    getData()
  },[])

  const getTaskFromServer = async () =>{
    // send GET http request to url 
    const data = await fetch("http://localhost:3000/Tasks/")
    const res = await data.json()
    console.log(res);
    return res ;
  }

  //add Task
  const addTask = async(task) =>{
    const data = await fetch("http://localhost:3000/Tasks/",{
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })
    const newTask = await data.json();
    setTask([...tasks,newTask])
  }

  //delete Task
  const deleteTask = async(id) => {
    await fetch(`http://localhost:3000/Tasks/${id}`,
    {
      method: 'DELETE'
    })
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
      <Header 
        onShowForm={()=>setShowForm(!showForm)} 
        onShowInfo={showForm}
        />
      {showForm && <AddTask onAdd={addTask} />}
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
