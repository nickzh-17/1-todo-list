import { removeTodoWithChange } from 'components/Todo/utils/remove-todo-with-change';
import { useActions } from 'hooks/useActions';
import { useCurrentTodo } from 'hooks/useCurrentTodo';
import { useSortConfig } from 'hooks/useFilter';
import { useSortedTodosByStatus } from 'hooks/useFilteredTodos';
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
	const { sortConfig } = useSortConfig();
	const { setCurrentTodo, clearCurrentTodo, removeTodo } = useActions();

	const resTodos = useSortedTodosByStatus(todos, sortConfig);

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
			{resTodos.length ? (
				resTodos?.map(todo => (
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
