import { FC } from 'react';
import { ITodoItem } from '../../types/types';
import './TodoHeader.css';

interface TodoHeaderParams {
	todos: ITodoItem[] | null;
}

export const TodoHeader: FC<TodoHeaderParams> = ({ todos }) => {
	const firstTodo: ITodoItem | null = todos ? todos[0] : null;

	return (
		<div className='todo-header'>
			{firstTodo ? (
				<div>
					Ближайшая задача:
					<h2>{firstTodo.title}</h2>
					<p>{firstTodo.description}</p>
				</div>
			) : (
				<h2>Your Todo List is empty</h2>
			)}
		</div>
	);
};
