import classNames from 'classnames';
import { useTodos } from 'hooks/useTodos';
import { FC, useState } from 'react';

import { TodoAddForm } from './TodoAddForm/TodoAddForm';

import './TodoAddSection.css';

interface TodoAddSectionProps {}

export const TodoAddSection: FC<TodoAddSectionProps> = () => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const { todos } = useTodos();

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
				{ big: !todos.length }
			)}
		>
			{isFocus ? (
				<TodoAddForm todos={todos} />
			) : (
				<button onClick={openAddSection} className='add-section__add-button'>
					Add new Todo
				</button>
			)}
		</div>
	);
};
