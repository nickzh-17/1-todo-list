import { TodoHeader } from './components/TodoHeader/TodoHeader';

import { TodoContent } from './components/TodoContent/TodoContent';

import { ToolsPanel } from './components/ToolsPanel/ToolsPanel';
import './Todo.css';

export const Todo = () => {
	return (
		<div className='todo'>
			<TodoHeader />
			<ToolsPanel />
			<TodoContent />
		</div>
	);
};
