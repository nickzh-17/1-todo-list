import { ITodoItem } from 'types/types';

interface IRemoveTodoWithChange {
	todos: ITodoItem[];
	todo: ITodoItem;
	isSelected: boolean;
	removeTodo: (todo: ITodoItem) => void;
	setCurrentTodo: (todo: ITodoItem) => void;
	clearCurrentTodo: () => void;
}

export const removeTodoWithChange = (params: IRemoveTodoWithChange) => {
	const {
		todos,
		todo,
		isSelected,
		setCurrentTodo,
		clearCurrentTodo,
		removeTodo,
	} = params;

	if (todos.length === 1) {
		removeTodo(todo);
		clearCurrentTodo();
		return;
	}

	if (isSelected) {
		const deletedTodoIndex = todos.findIndex(item => item.id === todo.id);

		const newCurrentTodoIndex =
			deletedTodoIndex === 0 ? deletedTodoIndex + 1 : deletedTodoIndex - 1;

		setCurrentTodo(todos[newCurrentTodoIndex]);

		removeTodo(todo);
		return;
	}

	removeTodo(todo);
};
