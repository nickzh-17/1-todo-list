import { FC, useState } from 'react';
import { TodoHeader } from './components/TodoHeader/TodoHeader';
import { TodoItemPreview } from './components/TodoItemPreview/TodoItemPreview';
import { TodoList } from './components/TodoList/TodoList';
import './styles/App.css';
import { ITodoItem } from './types/types';

const Data: ITodoItem[] = [
	{ id: 1, title: 'Eat shit', description: 'It is yammy', comments: [] },
	{ id: 2, title: 'Drink coffee', description: 'Maybe', comments: [] },
	{ id: 3, title: 'Sleep', description: 'about 8 hours', comments: [] },
];

export const App: FC = () => {
	const [todos, setTodos] = useState<ITodoItem[] | null>(Data);
	const [currentTodo, setCurrentTodo] = useState<ITodoItem | null>(null);

	const blurTodo = (e: React.MouseEvent<HTMLElement>) => {
		const hasClosestClass = (element: Element, className: string): boolean => {
			return Boolean(element.closest('.' + className));
		};

		const targetElement = e.target as Element;
		if (!hasClosestClass(targetElement, 'todo__content')) setCurrentTodo(null);
	};

	return (
		<div onClick={blurTodo} className='app'>
			<h1 onClick={() => setCurrentTodo(null)} className='app__heading'>
				Todo App
			</h1>
			<div className='app__body'>
				<div className='todo'>
					<TodoHeader todos={todos} />
					<div className='todo__content'>
						<TodoList todos={Data} changeCurrentTodo={setCurrentTodo} />
						<TodoItemPreview todo={currentTodo} />
					</div>
				</div>
			</div>
		</div>
	);
};
