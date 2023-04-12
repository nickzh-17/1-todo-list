import classNames from 'classnames';
import { FC } from 'react';
import { ITodoItem } from 'types/types';
import './TodoItemPreview.css';

interface TodoItemParams {
	// todo: ITodoItem | null;
	todos: ITodoItem[] | null;
}

export const TodoItemPreview: FC<TodoItemParams> = ({ todos }) => {
	return (
		<div
			className={classNames(
				'todo-preview',
				// { empty: !todo },
				{ empty: true },
				{ noTasks: !todos }
			)}
		>
			{/* {todo ? (
				<>
					<h2>{todo?.title}</h2>
					<p>{todo?.description}</p>
				</>
			) : (
				<div className='todo-preview__empty-text'>
					Click some Todo for details
				</div>
			)} */}

			<div className='todo-preview__empty-text'>
				Click some Todo for details
			</div>
		</div>
	);
};
