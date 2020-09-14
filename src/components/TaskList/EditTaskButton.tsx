import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

// import { useDispatch } from 'react-redux';

interface EditTaskProps {
  id: string
}

export const EditTaskButton: React.FunctionComponent<EditTaskProps> = ({ id }) => {
  
  const editTaskHandler = () => {
    console.log(id);
  };

  return (
    <IconButton color="primary" size="small" aria-label="Edit this record" component="button" onClick={editTaskHandler}>
      <EditIcon />
    </IconButton>
  );
};

export default EditTaskButton;
