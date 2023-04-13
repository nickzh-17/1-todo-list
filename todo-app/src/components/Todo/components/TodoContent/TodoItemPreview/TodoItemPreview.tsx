import classNames from 'classnames';
import { useCurrentTodo } from 'hooks/useCurrentTodo';
import { FC } from 'react';
import { ITodoItem } from 'types/types';
import './TodoItemPreview.css';

interface TodoItemParams {
	todos: ITodoItem[] | null;
}

export const TodoItemPreview: FC<TodoItemParams> = ({ todos }) => {
	const { currentTodo } = useCurrentTodo();

	return (
		<div
			className={classNames(
				'todo-preview',
				{ empty: !currentTodo?.id },
				{ noTasks: !todos }
			)}
		>
			{currentTodo ? (
				<>
					<h2>{currentTodo?.title}</h2>
					<p>{currentTodo?.description}</p>
				</>
			) : (
				<div className='todo-preview__empty-text'>
					Click some Todo for details
				</div>
			)}
		</div>
	);
};
