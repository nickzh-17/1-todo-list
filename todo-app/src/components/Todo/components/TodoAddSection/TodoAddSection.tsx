import classNames from 'classnames';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

import { TodoAddForm } from './TodoAddForm/TodoAddForm';

import './TodoAddSection.css';

interface TodoAddSectionProps {}

export const TodoAddSection: FC<TodoAddSectionProps> = () => {
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const todosT = useSelector((state: RootState) => state.todos);

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
				{ big: !todosT.length }
			)}
		>
			{isFocus ? (
				<TodoAddForm todos={todosT} />
			) : (
				<button onClick={openAddSection} className='add-section__add-button'>
					Add new Todo
				</button>
			)}
		</div>
	);
};
