import React from "react";
import {useState} from "react";
import './ToDoList.css';
import ToDotask from './ToDoList.js';

function App() {

 const [currtask, setCurrtask] = useState(null);
  const [taskList, updateTaskList] = useState([]);

  const onChangeHandler = e =>{
    console.log("current value",  e.target.value);
    setCurrtask(e.target.value);
  };
  const addTask = () =>{
    updateTaskList([...taskList, { kaarya: currtask, key: Date.now()}]);
    setCurrtask("");
    console.log ("task",taskList);
  }
  return (
  <div className="div1">
        <title>To Do List</title>
    <h1 align="center">Kaarya Suuchi</h1>
    <fieldset className="ipfield">
    <input value={currtask} onChange={onChangeHandler} placeholder="Kaarya Pravesh"/>
    <button onClick={addTask}>Ankit</button>
    <ToDotask taskList={taskList} updateTaskList={updateTaskList} />
    </fieldset>
  </div>
  );
}
export default App;
