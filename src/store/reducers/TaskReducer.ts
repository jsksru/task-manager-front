import { TaskState } from '../types/taskTypes';
import { ADD_TASK, REMOVE_TASK } from '../constants/taskConstants';

const initialState: TaskState = {
  tasks: {
    list: [],
    isLoading: false
  }
}

export const TaskReducer = (state: TaskState = initialState, action: any) => {

  switch (action.type) {

    case ADD_TASK: {
      return { ...state };
    }
    
    case REMOVE_TASK: {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }

}