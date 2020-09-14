import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeTask } from '../../store/actions/TaskActions';
import { useDispatch } from 'react-redux';

interface RemoveTaskProps {
  id: string
}

export const RemoveTaskButton: React.FunctionComponent<RemoveTaskProps> = ({ id }) => {

  const dispatch = useDispatch();

  const deleteTaskHandler = () => {
    dispatch(removeTask(id));
  };

  return (
    <IconButton color="secondary" size="small" aria-label="Delete this record" component="button" onClick={deleteTaskHandler}>
      <DeleteIcon />
    </IconButton>
  );
};

export default RemoveTaskButton;
