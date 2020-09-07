import React from 'react';
import TaskList from './components/TaskList/TaskList';
import NewTask from './components/NewTask/NewTask';
import { Tasks, Status } from './store/types/TaskTypes';

const tasks: Tasks = [
  
];

const App = () => {
  return (
    <>
      <NewTask />
      <hr/>
      <TaskList/>
    </>
  );
}

export default App;