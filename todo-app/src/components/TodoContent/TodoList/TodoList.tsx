import { FC } from 'react';
import { ITodoItem } from '../../../types/types';
import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.css';

interface TodoListParams {
	todos: ITodoItem[] | null;
	changeCurrentTodo: (todo: ITodoItem) => void;
	removeTodo: (todo: ITodoItem) => void;
}

export const TodoList: FC<TodoListParams> = ({
	todos,
	changeCurrentTodo,
	removeTodo,
}) => {
	return (
		<div className='todo-list'>
			{todos ? (
				todos?.map(todo => (
					<TodoItem
						onClick={changeCurrentTodo}
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
