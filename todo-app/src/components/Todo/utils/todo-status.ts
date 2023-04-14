import { ITodoItem, todoStatus } from 'types/types';

export const isTodoDone = (todo: ITodoItem) => todo.status === todoStatus.done;

export const toggleTodoStatus = (todo: ITodoItem) => {
	todo.status = isTodoDone(todo) ? todoStatus.progress : todoStatus.done;
};
