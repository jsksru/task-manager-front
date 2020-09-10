import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tasks } from '../../store/types/TaskTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import { getStatus } from '../../utils/functions';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../store/actions/TaskActions';

moment.locale('ru');

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TaskList = () => {
  const tasks: Tasks = useSelector( (state: RootState) => state.TaskReducer.tasks);
  const isLoading: boolean = useSelector( (state: RootState) => state.TaskReducer.isLoading);
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteTask = (id: string) => {
    dispatch(removeTask(id));
  };

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
      <Table className={classes.table} aria-label="simple table">
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
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell component="th" scope="row">{task.id}</TableCell>
              <TableCell align="left">{task.title}</TableCell>
              <TableCell align="right">{moment(task.started).format('D MMM в H:mm')}</TableCell>
              <TableCell align="right">{moment(task.expire).format('D MMM в H:mm')}</TableCell>
              <TableCell align="right">
                <Chip label={getStatus(task.status)} />
              </TableCell>
              <TableCell align="right">
                <IconButton color="primary" size="small" aria-label="Edit this record" component="button">
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" size="small" aria-label="Delete this record" component="button" onClick={() => deleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return isLoading ? loading : (tasks.length > 0) ? tasksList : emptyTasks;
}

export default TaskList;