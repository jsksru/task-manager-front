export enum Status {
  STARTED,
  INPROCESS,
  DONE,
  CANCEL
}

export type Task = {
  id: string,
  title: string,
  started: Date,
  expire: Date,
  status: Status
}

export type Tasks = Task[];

export interface TaskState {
  tasks: Tasks,
  isLoading: boolean
}

export type NewTask = {
  title: string,
  expire: Date
}