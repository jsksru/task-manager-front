import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/actions/TaskActions';
import moment from 'moment';

interface NewTask {
  taskTitle: string
}

const NewTask = () => {
  const now: Date = new Date();
  const [ taskTitle, setTaskTitle ] = useState('');
  const [ taskExpire, setTaskExpire ] = useState(now);
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    dispatch(addTask(taskTitle, new Date(taskExpire)));
  }

  return (
    <>
      <span>Title:</span><br/>
      <input type="text" placeholder="Enter task title here..." value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/><br/>
      <span>Expire:</span><br/>
      <input type="datetime-local" value={moment(taskExpire).format('YYYY-MM-DDTHH:mm')} onChange={(e) => setTaskExpire(new Date(Date.parse(e.target.value)))}/><br/>
      <button onClick={addTaskHandler}>Add</button>
    </>
  );
}

export default NewTask;