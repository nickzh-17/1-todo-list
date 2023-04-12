import { FC } from 'react';
import { ITodoItem } from 'types/types';
import './TodoHeaderInfo.css';

interface TodoHeaderInfoParams {
	todo: ITodoItem;
}

export const TodoHeaderInfo: FC<TodoHeaderInfoParams> = ({ todo }) => {
	return (
		<div className='todo-header__info'>
			<h2>{todo.title}</h2>
			<p>{todo.description}</p>
		</div>
	);
};
