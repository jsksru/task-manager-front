import { TaskState, Status } from '../types/taskTypes';
import { ADD_TASK, REMOVE_TASK } from '../constants/taskConstants';

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
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }

}