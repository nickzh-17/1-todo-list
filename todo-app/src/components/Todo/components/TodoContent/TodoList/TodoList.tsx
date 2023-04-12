import { useTodos } from 'hooks/useTodos';
import { FC } from 'react';
import { ITodoItem } from 'types/types';
import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.css';

interface TodoListParams {
	// currentTodo: ITodoItem | null;
	isPreviewOpened: boolean;
	onOpenPreview: (todo: ITodoItem) => void;
}

export const TodoList: FC<TodoListParams> = ({
	// currentTodo,
	isPreviewOpened,
	onOpenPreview,
}) => {
	const { todos } = useTodos();

	return (
		<div className='todo-list'>
			{todos.length ? (
				todos?.map(todo => (
					<TodoItem
						isPreviewOpened={isPreviewOpened}
						// isSelected={todo.id === currentTodo?.id}
						onClick={onOpenPreview}
						todo={todo}
						key={todo.id}
					/>
				))
			) : (
				<div className='todo-preview__empty-text'>Your task list is empty</div>
			)}
		</div>
	);
};
