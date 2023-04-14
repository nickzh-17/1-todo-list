import { removeTodoWithChange } from 'components/Todo/utils/remove-todo-with-change';
import { useActions } from 'hooks/useActions';
import { useCurrentTodo } from 'hooks/useCurrentTodo';
import { useTodos } from 'hooks/useTodos';
import { FC } from 'react';
import { ITodoItem } from 'types/types';
import { TodoControls } from '../TodoControls/TodoControls';
import './TodoHeader.css';
import { TodoHeaderInfo } from './TodoHeaderInfo/TodoHeaderInfo';

export const TodoHeader: FC = () => {
	const { todos } = useTodos();
	const { currentTodo } = useCurrentTodo();
	const { setCurrentTodo, clearCurrentTodo, removeTodo, toggleTodoStatus } =
		useActions();

	const firstTodo: ITodoItem | null = todos ? todos[0] : null;

	const removeTodoHandler = () => {
		if (!firstTodo) return;

		removeTodoWithChange({
			todos,
			todo: firstTodo,
			currentTodo,
			setCurrentTodo,
			clearCurrentTodo,
			removeTodo,
		});
	};

	return (
		<div className='todo-header'>
			{firstTodo ? (
				<div className='todo-header__data-wrapper'>
					<TodoHeaderInfo todo={firstTodo} />
					<TodoControls
						onRemoveTodo={removeTodoHandler}
						onToggleTodoStatus={() => toggleTodoStatus(firstTodo)}
					/>
				</div>
			) : (
				<h2>Your Todo List is empty</h2>
			)}
		</div>
	);
};
