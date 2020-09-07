import { ADD_TASK } from '../constants/TaskConstants';

export const addTask = (title: string, expire: Date) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
      expire
    }
  };
};