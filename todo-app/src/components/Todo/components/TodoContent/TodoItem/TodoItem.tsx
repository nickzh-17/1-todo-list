import classNames from 'classnames';
import { getShortDesctiption } from 'components/Todo/utils/get-short-description';
import { Checkbox } from 'components/UI/Checkbox/Checkbox';
import { DeleteTodoButton } from 'components/UI/DeleteTodoButton/DeleteTodoButton';
import { useActions } from 'hooks/useActions';
import { FC, useState } from 'react';
import { ITodoItem } from 'types/types';

// import { removeTodoRedux } from 'store/todos/todos.slice';
import './TodoItem.css';

interface TodoItemProps {
	todo: ITodoItem;
	isPreviewOpened: boolean;
	isSelected: boolean;
	onSetCurrentTodo: (todo: ITodoItem) => void;
	onRemoveTodo: (todo: ITodoItem) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
	todo,
	isPreviewOpened,
	isSelected,
	onSetCurrentTodo,
	onRemoveTodo,
}) => {
	const [status, setStatus] = useState<boolean>(false);
	const { removeTodo, clearCurrentTodo } = useActions();

	const toggleStatus = (): void => setStatus(prev => !prev);

	return (
		<div className='todo-item'>
			<Checkbox checked={status} setChecked={toggleStatus} />
			<div
				onClick={() => onSetCurrentTodo(todo)}
				className={classNames('todo-item__info', { selected: isSelected })}
			>
				<h3 className='todo-item__title'>{todo.title}</h3>
				<p className='todo-item__description'>
					{isPreviewOpened
						? getShortDesctiption(todo.description, 12)
						: getShortDesctiption(todo.description, 30)}
				</p>
			</div>
			<DeleteTodoButton
				deleteTodo={() => {
					onRemoveTodo(todo);
				}}
				todo={todo}
			/>
		</div>
	);
};
