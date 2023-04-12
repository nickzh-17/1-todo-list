import classNames from 'classnames';
import { FC, useState } from 'react';

import { ITodoItem } from 'types/types';
import { TodoAddForm } from './TodoAddForm/TodoAddForm';

import './TodoAddSection.css';

interface TodoAddSectionProps {
	addTodo: (todoItem: ITodoItem) => void;
	todos: ITodoItem[] | null;
}

export const TodoAddSection: FC<TodoAddSectionProps> = ({ addTodo, todos }) => {
	const [isFocus, setIsFocus] = useState<boolean>(false);

	const openAddSection = () => {
		if (isFocus) return;
		setIsFocus(prev => !prev);
	};

	const closeAddSection = () => {
		// if (!isFocus) return;
		// setIsFocus(prev => !prev);
	};

	return (
		<div
			onClick={closeAddSection}
			className={classNames(
				'add-section',
				{ opened: isFocus },
				{ big: !todos }
			)}
		>
			{isFocus ? (
				<TodoAddForm todos={todos} addTodo={addTodo} />
			) : (
				<button onClick={openAddSection} className='add-section__add-button'>
					Add new Todo
				</button>
			)}
		</div>
	);
};
