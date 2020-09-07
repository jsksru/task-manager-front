import React from 'react';
import TaskList from './components/TaskList/TaskList';
import NewTask from './components/NewTask/NewTask';
import { Tasks, Status } from './store/types/TaskTypes';

const tasks: Tasks = [
  {
    id: '101',
    title: 'Task 1',
    started: new Date(),
    expire: new Date(),
    status: Status.STARTED
  },
  {
    id: '102',
    title: 'Task 2',
    started: new Date(),
    expire: new Date(),
    status: Status.INPROCESS
  }
];

const App = () => {
  return (
    <>
      <NewTask />
      <hr/>
      <TaskList tasks={tasks} isLoading={false}/>
    </>
  );
}

export default App;