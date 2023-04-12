import { FC } from 'react';
import { ITodoItem } from 'types/types';
import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.css';

interface TodoListParams {
	todos: ITodoItem[] | null;
	currentTodo: ITodoItem | null;
	isPreviewOpened: boolean;
	onOpenPreview: (todo: ITodoItem) => void;
	removeTodo: (todo: ITodoItem) => void;
}

export const TodoList: FC<TodoListParams> = ({
	todos,
	currentTodo,
	isPreviewOpened,
	onOpenPreview,
	removeTodo,
}) => {
	return (
		<div className='todo-list'>
			{todos ? (
				todos?.map(todo => (
					<TodoItem
						isPreviewOpened={isPreviewOpened}
						isSelected={todo.id === currentTodo?.id}
						onClick={onOpenPreview}
						deleteTodo={removeTodo}
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
