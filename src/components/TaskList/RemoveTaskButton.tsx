import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeTask } from '../../store/actions/TaskActions';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

interface RemoveTaskProps {
  id: string
}

export const RemoveTaskButton: React.FunctionComponent<RemoveTaskProps> = ({ id }) => {

  const dispatch = useDispatch();
  const [ confirmOpen, setConfirmOpen ] = useState(false);

  const openDialogHandler = () => {
    setConfirmOpen(true);
  };

  const closeDialogHandler = () => {
    setConfirmOpen(false);
  };

  const agreeHandler = () => {
    dispatch(removeTask(id));
    closeDialogHandler();
  };

  return (
    <>
      <Tooltip title="Delete" aria-label="Delete" arrow placement="right">
        <IconButton color="secondary" size="small" aria-label="Delete this record" component="button" onClick={openDialogHandler}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={confirmOpen}
              onClose={closeDialogHandler}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">Удалить задачу ?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Подтвердите удаление задачи с номером {id}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box padding={2}>
          <Button onClick={closeDialogHandler} color="primary">
            Отмена
          </Button>
          <Button onClick={agreeHandler} color="secondary" variant="contained" autoFocus>
            Удалить
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  </>
  );
};

export default RemoveTaskButton;
