import { FC, useState } from 'react';
import { ITodoItem } from '../../types/types';
import { Checkbox } from '../UI/Checkbox/Checkbox';

import './TodoItem.css';

interface TodoItemProps {
	todo: ITodoItem;
	onClick: (todo: ITodoItem) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
	const [status, setStatus] = useState<boolean>(false);

	const toggleStatus = (): void => setStatus(prev => !prev);

	return (
		<div onClick={() => onClick(todo)} className='todo-item'>
			<Checkbox checked={status} setChecked={toggleStatus} />
			<div className='todo-item__info'>
				<h3 className='todo-item__title'>{todo.title}</h3>
				<p className='todo-item__description'>{todo.description}</p>
			</div>
		</div>
	);
};
