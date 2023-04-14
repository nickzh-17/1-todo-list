import { createSlice } from '@reduxjs/toolkit';
import { isTodoDone } from 'components/Todo/utils/todo-status';
import { ITodoItem, todoStatus } from 'types/types';

// const initialState: ITodoItem[] = constantData;
const initialState: ITodoItem[] = [
	{
		id: 'asdasd',
		title: 'test done',
		description: 'test done',
		comments: null,
		status: todoStatus.done,
	},
];

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, { payload: todo }) => {
			const isExist = state.some(item => item.id === todo.id);

			if (isExist) return;

			state.push(todo);
		},
		removeTodo: (state, { payload: todo }) => {
			const index = state.findIndex(item => item.id === todo.id);

			if (index !== -1) state.splice(index, 1);
		},
		toggleTodoStatus: (state, { payload: todo }) => {
			const stateTodo = state.find(item => item.id === todo.id);

			if (!stateTodo) return;

			stateTodo.status = isTodoDone(stateTodo)
				? todoStatus.progress
				: todoStatus.done;
		},
	},
});

export const { addTodo, removeTodo, toggleTodoStatus } = todosSlice.actions;
export const { actions } = todosSlice;

export default todosSlice.reducer;
