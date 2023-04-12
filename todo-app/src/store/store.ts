import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todos.slice';

const reducers = combineReducers([todosReducer]);

export const store = configureStore({
	// reducer: reducers,
	reducer: {
		todos: todosReducer,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
