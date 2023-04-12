import classNames from 'classnames';
import { TodosContext } from 'components/Todo/context/todo-context';
import { FC, useContext, useState } from 'react';
import { ITodoItem } from 'types/types';
import './TodoContent.css';
import { TodoItemPreview } from './TodoItemPreview/TodoItemPreview';
import { TodoList } from './TodoList/TodoList';

interface TodoContentParams {
	todos: ITodoItem[] | null;
	removeItem: (todo: ITodoItem) => void;
}

export const TodoContent: FC<TodoContentParams> = ({ todos, removeItem }) => {
	const [isPreviewOpened, setIsPreviewOpened] = useState<boolean>(false);
	const todoContext = useContext(TodosContext);
	const currentTodo = todoContext?.currentTodo
		? todoContext?.currentTodo
		: null;
	const setCurrentTodo = todoContext?.setCurrentTodo;

	const openPreview = (todo: ITodoItem): void => {
		setIsPreviewOpened(true);
		setCurrentTodo?.(todo);
	};

	return (
		<div className={classNames('todo__content', { noTasks: !todos })}>
			<TodoList
				todos={todos}
				currentTodo={currentTodo}
				isPreviewOpened={isPreviewOpened}
				onOpenPreview={openPreview}
				removeTodo={removeItem}
			/>
			<TodoItemPreview todos={todos} todo={currentTodo} />
		</div>
	);
};
