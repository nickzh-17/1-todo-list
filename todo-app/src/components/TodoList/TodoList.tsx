import { FC } from 'react';
import { ITodoItem } from '../../types/types';
import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.css';

interface TodoListParams {
	todos: ITodoItem[];
	changeCurrentTodo: (todo: ITodoItem) => void;
}

export const TodoList: FC<TodoListParams> = ({ todos, changeCurrentTodo }) => {
	return (
		<div className='todo-list'>
			{todos.map(todo => (
				<TodoItem onClick={changeCurrentTodo} todo={todo} key={todo.id} />
			))}
		</div>
	);
};
