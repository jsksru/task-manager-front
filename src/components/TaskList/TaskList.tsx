import React from 'react';
import moment from 'moment';
import { Tasks } from '../../store/types/TaskTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { getStatus } from '../../utils/functions';

moment.locale('ru');

const TaskList = () => {
  const tasks: Tasks = useSelector( (state: RootState) => state.TaskReducer.tasks);
  const isLoading: boolean = useSelector( (state: RootState) => state.TaskReducer.isLoading);

  const loading = (
    <div>
      Tasks Loading...
    </div>
  );

  const tasksList = (
    <ul>
      { tasks.map(task => <li key={task.id}>{task.title} exp: {moment(task.expire).format('D MMMM YYYY в H:mm')} status: {getStatus(task.status)}</li>) }
    </ul>
  );

  return isLoading ? loading : tasksList;
}

export default TaskList;