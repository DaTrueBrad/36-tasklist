import { useState } from "react";
import "./App.css";
import Bravo from "./components/Bravo";
import Charlie from "./components/Charlie";
import Delta from "./components/Delta";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  //! all state go here
  const [taskList, setTaskList] = useState([])

  const handleChange = (e) => {};

  const addTask = (newTask) => setTaskList([...taskList,newTask]);
  console.log("LIST: ", taskList)
  return (
    <div className="App">
      <h1>App</h1>
      <Form addTask={addTask} />
      <List taskList={taskList} />
    </div>
  );
}

export default App;
