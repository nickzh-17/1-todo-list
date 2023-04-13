import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { ICurrentTodoState } from 'types/types';

// const clearTodo: ITodoItem = {
// 	id: '',
// 	title: '',
// 	description: '',
// 	status: todoStatus.progress,
// 	comments: null,
// };

const initialState: ICurrentTodoState = {
	todo: null,
};

export const currentTodoSlice = createSlice({
	name: 'currentTodo',
	initialState,
	reducers: {
		setCurrentTodo: (state, { payload: todo }) => {
			console.log(todo);
			state.todo = todo;
		},
		clearCurrentTodo: state => {
			state.todo = null;
		},
	},
});

export const selectCurrentTodo = (state: RootState) => state.currentTodo.todo;

export const { setCurrentTodo, clearCurrentTodo } = currentTodoSlice.actions;

const { actions } = currentTodoSlice;
export { actions as currentTodoActions };

export default currentTodoSlice.reducer;
