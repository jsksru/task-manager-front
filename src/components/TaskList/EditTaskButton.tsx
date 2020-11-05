import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { Status } from '../../store/types/TaskTypes';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';

// import { useDispatch } from 'react-redux';

interface EditTaskProps {
  id: string,
  title: string,
  expire: Date,
  status: Status
}

export const EditTaskButton: React.FunctionComponent<EditTaskProps> = ({ id, title, expire, status }) => {

  const [ titleInput, setTitleInput ] = useState(title);
  const [ expireInput, setExpireInput ] = useState<Date | null>(expire);
  const [ statusInput, setStatusInput ] = useState<Status | null>(status)
  const [ open, setOpen ] = useState(false);

  const closeDialogHandler = () => {
    setOpen(false);
  };
  const editTaskHandler = () => {
    setOpen(true);
  };
  const titleInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value);
  };
  const statusInputHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatusInput(event.target.value as Status);
  };

  
  return (
    <>
    <Tooltip title="Edit" aria-label="Edit" arrow placement="left">
      <IconButton color="primary" size="small" aria-label="Edit this record" component="button" onClick={editTaskHandler}>
        <EditIcon />
      </IconButton>
    </Tooltip>
    <Dialog open={open}
            onClose={closeDialogHandler}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Редактировать задачу № {id}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box>
            <TextField fullWidth
                       required
                       variant="filled"
                       label="Что нужно зделать?"
                       value={titleInput} onChange={titleInputHandler}
            />
          </Box>
          <Box marginTop={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
              <DateTimePicker format="d MMMM Y г. в H:mm"
                              label="Дата и время окончания"
                              fullWidth
                              value={expireInput}
                              ampm={false}
                              variant="inline"
                              inputVariant="filled"
                              onChange={setExpireInput}
                />
            </MuiPickersUtilsProvider>
          </Box>
          <Box marginTop={3}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Статус</InputLabel>
              <Select labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={statusInput}
                      onChange={statusInputHandler}
              >
                <MenuItem value={Status.STARTED}>Создано</MenuItem>
                <MenuItem value={Status.INPROCESS}>В процессе</MenuItem>
                <MenuItem value={Status.DONE}>Выполнено</MenuItem>
                <MenuItem value={Status.CANCEL}>Отменен</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box padding={2}>
          <Button onClick={closeDialogHandler} color="primary">Отмена</Button>
          <Button onClick={()=>{}} color="primary" variant="contained" autoFocus>Сохранить...</Button>
        </Box>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default EditTaskButton;
