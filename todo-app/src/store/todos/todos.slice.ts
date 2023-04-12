import { createSlice } from '@reduxjs/toolkit';
import { ITodoItem } from 'types/types';

// const initialState: ITodoItem[] = constantData;
const initialState: ITodoItem[] = [];

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodoRedux: (state, { payload: todo }) => {
			const isExist = state.some(item => item.id === todo.id);

			if (isExist) return;

			state.push(todo);
		},
		removeTodoRedux: (state, { payload: todo }) => {
			const index = state.findIndex(item => item.id === todo.id);

			if (index !== -1) state.splice(index, 1);
		},
	},
});

export const { addTodoRedux, removeTodoRedux } = todosSlice.actions;
export const { actions } = todosSlice;

export default todosSlice.reducer;
