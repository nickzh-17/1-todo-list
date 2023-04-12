import { FC, useState } from 'react';
import { ITodoItem } from 'types/types';
import { TodoHeader } from './components/TodoHeader/TodoHeader';

import { TodoAddSection } from './components/TodoAddSection/TodoAddSection';
import { TodoContent } from './components/TodoContent/TodoContent';

import { TodosContext } from './context/todo-context';
import './Todo.css';

interface TodoParams {
	initialTodos: ITodoItem[] | null;
}

export const Todo: FC<TodoParams> = ({ initialTodos = null }) => {
	const [todos, setTodos] = useState<ITodoItem[] | null>(initialTodos);
	const [curTodo, setCurTodo] = useState<ITodoItem | null>(null);

	const addTodo = (item: ITodoItem): void => {
		setTodos(todos ? [...todos, item] : [item]);
	};

	const removeItem = (item: ITodoItem | null): void => {
		console.log(todos);
		console.log(item);
		const newTodos = todos ? todos.filter(todo => todo.id !== item?.id) : null;
		setTodos(newTodos?.length ? newTodos : null);
	};

	return (
		<TodosContext.Provider
			value={{
				todos: todos,
				currentTodo: curTodo,
				setCurrentTodo: setCurTodo,
				setTodos: setTodos,
				removeTodo: removeItem,
			}}
		>
			<div className='todo'>
				<TodoHeader />
				<TodoAddSection todos={todos} addTodo={addTodo} />
				<TodoContent todos={todos} removeItem={removeItem} />
			</div>
		</TodosContext.Provider>
	);
};
