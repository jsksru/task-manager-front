import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Chip from '@material-ui/core/Chip';
import RemoveTaskButton from './RemoveTaskButton';
import EditTaskButton from './EditTaskButton';
import moment from 'moment';
import { Status } from '../../store/types/TaskTypes';
import { getStatus } from '../../utils/functions';

interface RowProps {
  data: {
    id: string,
    title: string,
    started: Date,
    expire: Date,
    status: Status
  }
}

const TaskListRow: React.FunctionComponent<RowProps> = (props: RowProps) => {
  const { id, title, started, expire, status } = props.data;

  return (
    <TableRow>
      <TableCell component="th" scope="row">{id}</TableCell>
      <TableCell align="left">{title}</TableCell>
      <TableCell align="right">{moment(started).format('D MMM в H:mm')}</TableCell>
      <TableCell align="right">{moment(expire).format('D MMM в H:mm')}</TableCell>
      <TableCell align="right">
        <Chip label={getStatus(status)} />
      </TableCell>
      <TableCell align="right">
        <EditTaskButton id={id} title={title} expire={expire} status={status}/>
        <RemoveTaskButton id={id} />
      </TableCell>
    </TableRow>
  );
};

export default TaskListRow;