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
	onClick: (todo: ITodoItem) => void;
	isPreviewOpened: boolean;
	// isSelected: boolean;
}

export const TodoItem: FC<TodoItemProps> = ({
	todo,
	onClick,
	isPreviewOpened,
	// isSelected,
}) => {
	const [status, setStatus] = useState<boolean>(false);
	const { removeTodoRedux } = useActions();

	const toggleStatus = (): void => setStatus(prev => !prev);

	return (
		<div onClick={() => onClick(todo)} className='todo-item'>
			<Checkbox checked={status} setChecked={toggleStatus} />
			<div className='todo-item__info'>
				<h3 className='todo-item__title'>{todo.title}</h3>
				<p className='todo-item__description'>
					{isPreviewOpened
						? getShortDesctiption(todo.description, 12)
						: getShortDesctiption(todo.description, 30)}
				</p>
			</div>
			<DeleteTodoButton
				deleteTodo={() => {
					removeTodoRedux(todo);
					console.log(todo);
				}}
				todo={todo}
			/>
		</div>
	);
};
