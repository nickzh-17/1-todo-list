import { ITodoItem } from 'types/types';

interface IRemoveTodoWithChange {
	todos: ITodoItem[];
	todo: ITodoItem;
	currentTodo: ITodoItem | null;
	removeTodo: (todo: ITodoItem) => void;
	setCurrentTodo: (todo: ITodoItem) => void;
	clearCurrentTodo: () => void;
}

const isTodoSelected = (todo: ITodoItem, currentTodo: ITodoItem | null) =>
	todo.id === currentTodo?.id;

export const removeTodoWithChange = (params: IRemoveTodoWithChange) => {
	const {
		todos,
		todo,
		currentTodo,
		setCurrentTodo,
		clearCurrentTodo,
		removeTodo,
	} = params;

	const isSelected = isTodoSelected(todo, currentTodo);

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
