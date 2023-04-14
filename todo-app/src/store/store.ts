import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentTodoReducer from './todos/currentTodo.slice';
import todosReducer from './todos/todos.slice';

const reducers = combineReducers({
	todosState: todosReducer,
	currentTodo: currentTodoReducer,
});

export const store = configureStore({
	reducer: reducers,
	// reducer: {
	// 	todos: todosReducer,
	// },
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
