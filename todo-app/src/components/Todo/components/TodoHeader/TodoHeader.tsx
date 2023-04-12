import { useTodos } from 'hooks/useTodos';
import { FC } from 'react';
import { ITodoItem } from 'types/types';
import { TodoControls } from '../TodoControls/TodoControls';
import './TodoHeader.css';
import { TodoHeaderInfo } from './TodoHeaderInfo/TodoHeaderInfo';

interface TodoHeaderParams {
	// todos: ITodoItem[] | null;
}

export const TodoHeader: FC<TodoHeaderParams> = () => {
	const { todos } = useTodos();
	const firstTodo: ITodoItem | null = todos ? todos[0] : null;

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
