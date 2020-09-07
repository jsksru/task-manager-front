import React from 'react';
import { Tasks } from '../../store/types/TaskTypes';

interface TaskProps {
  tasks: Tasks,
  isLoading: boolean
}

const TaskList = (props: TaskProps) => {
  const { tasks, isLoading } = props;

  const loading = (
    <div>
      Tasks Loading...
    </div>
  );

  const tasksList = (
    <ul>
      { tasks.map(task => <li key={task.id}>{task.title}</li>) }
    </ul>
  );

  return isLoading ? loading : tasksList;
}

export default TaskList;