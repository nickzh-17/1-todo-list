import classNames from 'classnames';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { ITodoItem } from 'types/types';
import './TodoContent.css';
import { TodoItemPreview } from './TodoItemPreview/TodoItemPreview';
import { TodoList } from './TodoList/TodoList';

interface TodoContentParams {}

export const TodoContent: FC<TodoContentParams> = ({}) => {
	const [isPreviewOpened, setIsPreviewOpened] = useState<boolean>(false);

	const todos = useSelector((state: RootState) => state.todos);

	const openPreview = (todo: ITodoItem): void => {
		setIsPreviewOpened(true);
	};

	return (
		<div className={classNames('todo__content', { noTasks: !todos })}>
			<TodoList isPreviewOpened={isPreviewOpened} onOpenPreview={openPreview} />
			<TodoItemPreview todos={todos} />
		</div>
	);
};
