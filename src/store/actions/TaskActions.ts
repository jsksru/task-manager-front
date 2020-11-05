import { Status } from './../types/TaskTypes';
import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from '../constants/TaskConstants';

export const addTask = (title: string, expire: Date | null) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
      expire
    }
  };
};

export const removeTask = (id: string) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id
    }
  };
};

export const changeTask = (id: string, title: string, expire: Date, status: Status) => {
  return {
    type: CHANGE_TASK,
    payload: {
      id,
      title,
      expire,
      status
    }
  };
};