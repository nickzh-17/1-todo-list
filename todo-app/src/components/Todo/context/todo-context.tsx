import { createContext } from 'react';
import { ITodoItem } from 'types/types';

interface ITodoContext {
	todos: ITodoItem[] | null;
	currentTodo: ITodoItem | null;
	setTodos: (todos: ITodoItem[]) => void;
	setCurrentTodo: (todo: ITodoItem) => void;
	removeTodo: (todo: ITodoItem | null) => void;
}

export const TodosContext = createContext<ITodoContext | null>(null);
