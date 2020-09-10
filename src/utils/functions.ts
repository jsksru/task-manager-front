import { Status } from '../store/types/TaskTypes';

export const getStatus = (status: Status): string => {
  
  switch (status) {
    case Status.STARTED: {
      return 'Создано';
    }
    case Status.DONE: {
      return 'Завершено';
    }
    case Status.CANCEL: {
      return 'Отменено';
    }
    case Status.INPROCESS: {
      return 'В процессе';
    }
    default: {
      return 'Неизвестен';
    }
  }
  
}