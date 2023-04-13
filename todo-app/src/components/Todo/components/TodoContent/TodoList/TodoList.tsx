import { removeTodoWithChange } from 'components/Todo/utils/remove-todo-with-change';
import { useActions } from 'hooks/useActions';
import { useCurrentTodo } from 'hooks/useCurrentTodo';
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

export const TodoList: FC<TodoListParams> = ({ isPreviewOpened }) => {
	const { todos } = useTodos();
	const { currentTodo } = useCurrentTodo();
	const { setCurrentTodo, clearCurrentTodo, removeTodo } = useActions();

	const removeTodoHandler = (todo: ITodoItem) =>
		removeTodoWithChange({
			todos,
			todo,
			currentTodo,
			setCurrentTodo,
			clearCurrentTodo,
			removeTodo,
		});

	return (
		<div className='todo-list'>
			{todos.length ? (
				todos?.map(todo => (
					<TodoItem
						isPreviewOpened={isPreviewOpened}
						isSelected={todo.id === currentTodo?.id}
						onSetCurrentTodo={setCurrentTodo}
						onRemoveTodo={removeTodoHandler}
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
