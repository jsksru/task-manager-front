import React from 'react';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Tasks } from '../../store/types/TaskTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import TaskListRow from './TaskListRow';


moment.locale('ru');

const TaskList = () => {
  const tasks: Tasks = useSelector( (state: RootState) => state.TaskReducer.tasks);
  const isLoading: boolean = useSelector( (state: RootState) => state.TaskReducer.isLoading);

  const loading = (
    <div>
      Tasks Loading...
    </div>
  );
  const emptyTasks = (
    <div>
      Нет задач.
    </div>
  );

  const tasksList = (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="left">Задача</TableCell>
            <TableCell align="right">Создана</TableCell>
            <TableCell align="right">Истекает</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map( (task) => <TaskListRow data={task} key={task.id}/> )}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return isLoading ? loading : (tasks.length > 0) ? tasksList : emptyTasks;
}

export default TaskList;