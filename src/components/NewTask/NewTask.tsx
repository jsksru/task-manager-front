import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/actions/TaskActions';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fade from '@material-ui/core/Fade';
import FormHelperText from '@material-ui/core/FormHelperText';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

interface NewTask {
  taskTitle: string
}

const NewTask = () => {
  const [ taskTitle, setTaskTitle ] = useState('');
  const [ open, setOpen ] = useState(false);
  const [ inputError, setinputError] = useState(false);
  const [ taskExpire, setTaskExpire ] = useState<Date | null>(new Date());
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTaskHandler = () => {

    if (taskTitle.length === 0) {
      setinputError(true);
    } else {
      setinputError(false);
      dispatch(addTask(taskTitle, taskExpire));
      setTaskTitle('');
      setTaskExpire(new Date());
      setOpen(false);
    }
    
  }

  return (
    <>
    <Button variant="contained" color="primary" size="large" onClick={handleClickOpen}>Добавить задачу</Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" scroll="body" TransitionComponent={Fade}>
      <DialogTitle id="form-dialog-title">Новая задача</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Введите название для новой задачи и установите время её окончания.
        </DialogContentText>
        <Box>
          <TextField fullWidth
                     required
                     variant="filled"
                     label="Что нужно зделать?"
                     value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                     error={inputError}
          />
          {inputError && <FormHelperText error={inputError}>Это обязательное поле !</FormHelperText>}
        </Box>
        <Box marginTop={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <DateTimePicker format="d MMMM Y г. в H:mm" label="Дата и время окончания" fullWidth value={taskExpire} ampm={false} variant="inline" inputVariant="filled" onChange={setTaskExpire}/>
          </MuiPickersUtilsProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box padding={2}>
        <Button onClick={handleClose}>
          Отмена
        </Button>
        <Button onClick={addTaskHandler} color="primary" variant="contained">
          Добавить
        </Button>
        </Box>
      </DialogActions>
    </Dialog>
    </>
  );
}

export default NewTask;