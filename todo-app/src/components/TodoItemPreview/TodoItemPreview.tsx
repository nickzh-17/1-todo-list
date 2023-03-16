import classNames from 'classnames';
import { FC } from 'react';
import { ITodoItem } from '../../types/types';
import './TodoItemPreview.css';

interface TodoItemParams {
	todo: ITodoItem | null;
}

export const TodoItemPreview: FC<TodoItemParams> = ({ todo }) => {
	return (
		<div className={classNames('todo-preview', { empty: !todo })}>
			{todo ? (
				<>
					<h2>{todo?.title}</h2>
					<p>{todo?.description}</p>
				</>
			) : (
				<div className='todo-preview__empty-text'>Empty</div>
			)}
		</div>
	);
};
