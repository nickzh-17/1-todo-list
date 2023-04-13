import { useActions } from 'hooks/useActions';
import { useTodos } from 'hooks/useTodos';
import { FC } from 'react';
import { ITodoItem } from 'types/types';
import { TodoControls } from '../TodoControls/TodoControls';
import './TodoHeader.css';
import { TodoHeaderInfo } from './TodoHeaderInfo/TodoHeaderInfo';

export const TodoHeader: FC = () => {
	const { todos } = useTodos();
	const firstTodo: ITodoItem | null = todos ? todos[0] : null;

	const { removeTodo } = useActions();

	return (
		<div className='todo-header'>
			{firstTodo ? (
				<div className='todo-header__data-wrapper'>
					<TodoHeaderInfo todo={firstTodo} />
					<TodoControls todo={firstTodo} />
				</div>
			) : (
				<h2>Your Todo List is empty</h2>
			)}
		</div>
	);
};
