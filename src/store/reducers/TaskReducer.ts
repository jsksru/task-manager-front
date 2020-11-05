import { TaskState, Status } from '../types/TaskTypes';
import { ADD_TASK, REMOVE_TASK, CHANGE_TASK } from '../constants/TaskConstants';

let counter = 100;

const initialState: TaskState = {
  tasks: [
    {
      id: (counter++).toString(),
      title: 'Task 1',
      started: new Date(),
      expire: new Date(),
      status: Status.STARTED
    },
    {
      id: (counter++).toString(),
      title: 'Task 2',
      started: new Date(),
      expire: new Date(),
      status: Status.INPROCESS
    }
  ],
  isLoading: false
}

export const TaskReducer = (state: TaskState = initialState, action: any) => {

  switch (action.type) {

    case ADD_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: (counter++).toString(),
            started: new Date(),
            status: Status.STARTED,
            ...action.payload
          }
        ]
      };
    }
    
    case REMOVE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload.id),
      };
    }

    case CHANGE_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks.filter(item => item.id !== action.payload.id),
          {
            ...state.tasks.find(item => item.id === action.payload.id),
            title: action.payload.title,
            expire: action.payload.expire,
            status: action.payload.status,
          }
        ]
      };
    }

    default: {
      return { ...state };
    }
  }

}