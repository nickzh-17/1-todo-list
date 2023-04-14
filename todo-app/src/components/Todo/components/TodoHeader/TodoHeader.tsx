import { removeTodoWithChange } from 'components/Todo/utils/remove-todo-with-change';
import { useActions } from 'hooks/useActions';
import { useCurrentTodo } from 'hooks/useCurrentTodo';
import { useTodos } from 'hooks/useTodos';
import { FC } from 'react';
import { ITodoItem, todoStatus } from 'types/types';
import { TodoControls } from '../TodoControls/TodoControls';
import './TodoHeader.css';
import { TodoHeaderInfo } from './TodoHeaderInfo/TodoHeaderInfo';

export const TodoHeader: FC = () => {
	const { todos } = useTodos();
	const { currentTodo } = useCurrentTodo();
	const { setCurrentTodo, clearCurrentTodo, removeTodo, toggleTodoStatus } =
		useActions();

	const firstUncompleteTodo: ITodoItem | null = todos.length
		? todos.filter(item => item.status === todoStatus.progress)[0]
		: null;

	const removeTodoHandler = () => {
		if (!firstUncompleteTodo) return;

		removeTodoWithChange({
			todos,
			todo: firstUncompleteTodo,
			currentTodo,
			setCurrentTodo,
			clearCurrentTodo,
			removeTodo,
		});
	};

	return (
		<div className='todo-header'>
			{firstUncompleteTodo ? (
				<div className='todo-header__data-wrapper'>
					<TodoHeaderInfo todo={firstUncompleteTodo} />
					<TodoControls
						onRemoveTodo={removeTodoHandler}
						onToggleTodoStatus={() => toggleTodoStatus(firstUncompleteTodo)}
					/>
				</div>
			) : (
				<h2>
					{todos.length ? 'You did all your tasks!' : 'Your Todo List is empty'}
				</h2>
			)}
		</div>
	);
};
