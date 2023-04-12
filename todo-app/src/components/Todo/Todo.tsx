import { FC } from 'react';
import { ITodoItem } from 'types/types';
import { TodoHeader } from './components/TodoHeader/TodoHeader';

import { TodoAddSection } from './components/TodoAddSection/TodoAddSection';
import { TodoContent } from './components/TodoContent/TodoContent';

import './Todo.css';

interface TodoParams {
	initialTodos: ITodoItem[] | null;
}

export const Todo: FC<TodoParams> = ({ initialTodos = null }) => {
	return (
		<div className='todo'>
			<TodoHeader />
			<TodoAddSection />
			<TodoContent />
		</div>
	);
};
