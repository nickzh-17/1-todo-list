import classNames from 'classnames';
import { FC, useState } from 'react';
import { ITodoItem } from '../../types/types';
import './TodoContent.css';
import { TodoItemPreview } from './TodoItemPreview/TodoItemPreview';
import { TodoList } from './TodoList/TodoList';

interface TodoContentParams {
	todos: ITodoItem[] | null;
	removeItem: (todo: ITodoItem) => void;
}

export const TodoContent: FC<TodoContentParams> = ({ todos, removeItem }) => {
	const [currentTodo, setCurrentTodo] = useState<ITodoItem | null>(null);

	return (
		<div className={classNames('todo__content', { noTasks: !todos })}>
			<TodoList
				todos={todos}
				changeCurrentTodo={setCurrentTodo}
				removeTodo={removeItem}
			/>
			<TodoItemPreview todos={todos} todo={currentTodo} />
		</div>
	);
};
