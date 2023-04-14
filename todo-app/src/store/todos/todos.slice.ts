import { createSlice } from '@reduxjs/toolkit';
import { isTodoDone } from 'components/Todo/utils/todo-status';
import { ITodosState, todosFilters, todoStatus } from 'types/types';

// const initialState: ITodoItem[] = constantData;

const DEFAULT_FILTER: todosFilters = todosFilters.byDate;

const initialState: ITodosState = {
	todos: [
		{
			id: 'asdasd',
			title: 'test done',
			description: 'test done',
			comments: null,
			status: todoStatus.done,
		},
	],
	filter: DEFAULT_FILTER,
};

export const todosSlice = createSlice({
	name: 'todosState',
	initialState,
	reducers: {
		addTodo: (state, { payload: todo }) => {
			const isExist = state.todos.some(item => item.id === todo.id);

			if (isExist) return;

			state.todos.push(todo);
		},
		removeTodo: (state, { payload: todo }) => {
			const index = state.todos.findIndex(item => item.id === todo.id);

			if (index !== -1) state.todos.splice(index, 1);
		},
		toggleTodoStatus: (state, { payload: todo }) => {
			const stateTodo = state.todos.find(item => item.id === todo.id);

			if (!stateTodo) return;

			stateTodo.status = isTodoDone(stateTodo)
				? todoStatus.progress
				: todoStatus.done;
		},
		setFilter: (state, { payload: newMethod }) => {
			state.filter = newMethod;
		},
		setDefaultFilter: state => {
			state.filter = DEFAULT_FILTER;
		},
	},
});

export const {
	addTodo,
	removeTodo,
	toggleTodoStatus,
	setFilter,
	setDefaultFilter,
} = todosSlice.actions;
export const { actions } = todosSlice;

export default todosSlice.reducer;
