import { createSlice } from '@reduxjs/toolkit';
import { isTodoDone } from 'components/Todo/utils/todo-status';
import {
	ISortConfig,
	ITodosState,
	sortOrders,
	todosFilters,
	todoStatus,
} from 'types/types';

// const initialState: ITodoItem[] = constantData;

const DEFAULT_SORT_CONFIG: ISortConfig = {
	method: todosFilters.byDate,
	order: sortOrders.asc,
};

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
	sortConfig: DEFAULT_SORT_CONFIG,
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
		setSortMethod: (state, { payload: newMethod }) => {
			state.sortConfig.method = newMethod;
		},
		setDefaultFilter: state => {
			state.sortConfig = DEFAULT_SORT_CONFIG;
		},
	},
});

export const {
	addTodo,
	removeTodo,
	toggleTodoStatus,
	setSortMethod,
	setDefaultFilter,
} = todosSlice.actions;
export const { actions } = todosSlice;

export default todosSlice.reducer;
