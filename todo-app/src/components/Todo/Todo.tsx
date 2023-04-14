import { FC } from 'react';
import { ITodoItem } from 'types/types';
import { TodoHeader } from './components/TodoHeader/TodoHeader';

import { TodoContent } from './components/TodoContent/TodoContent';

import { ToolsPanel } from './components/ToolsPanel/ToolsPanel';
import './Todo.css';

interface TodoParams {
	initialTodos: ITodoItem[] | null;
}

export const Todo: FC<TodoParams> = ({ initialTodos = null }) => {
	return (
		<div className='todo'>
			<TodoHeader />
			<ToolsPanel />
			<TodoContent />
		</div>
	);
};
