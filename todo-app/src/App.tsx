import { FC, useState } from 'react';
import { TodoHeader } from './components/TodoHeader/TodoHeader';
import { ITodoItem } from './types/types';

import { TodoAddSection } from './components/TodoAddSection/TodoAddSection';
import { TodoContent } from './components/TodoContent/TodoContent';
import './styles/App.css';

const Data: ITodoItem[] = [
	{ id: 1, title: 'Eat shit', description: 'It is yammy', comments: [] },
	{ id: 2, title: 'Drink coffee', description: 'Maybe', comments: [] },
	{ id: 3, title: 'Sleep', description: 'about 8 hours', comments: [] },
];

export const App: FC = () => {
	const [todos, setTodos] = useState<ITodoItem[] | null>(Data);

	const appClickHandler = (event: React.MouseEvent<HTMLElement>): void => {
		// actionOnBackgroundClick(event, 'todo__content', () => setCurrentTodo(null));
	};
	const addTodo = (item: ITodoItem): void => {
		if (todos) {
			setTodos([...todos, item]);
			return;
		}

		setTodos([item]);
	};

	const removeItem = (item: ITodoItem): void => {
		const newTodos = todos ? todos.filter(todo => todo.id !== item.id) : null;

		// setCurrentTodo(null);

		if (!newTodos?.length) {
			setTodos(null);

			return;
		}

		setTodos(newTodos);
	};

	return (
		<div onClick={appClickHandler} className='app'>
			<h1 className='app__heading'>Todo App</h1>
			<div className='app__body'>
				<div className='todo'>
					<TodoHeader todos={todos} />
					<TodoAddSection todos={todos} addTodo={addTodo} />
					<TodoContent todos={todos} removeItem={removeItem} />
				</div>
			</div>
		</div>
	);
};
