import { ADD_TASK, REMOVE_TASK } from '../constants/TaskConstants';

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