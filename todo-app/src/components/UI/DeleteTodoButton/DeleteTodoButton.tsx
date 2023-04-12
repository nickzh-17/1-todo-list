import { FC } from 'react';
import { ITodoItem } from '../../../types/types';

import './DeleteTodoButton.css';

interface DeleteTodoButtonParams {
	todo: ITodoItem;
	deleteTodo: () => void;
}

export const DeleteTodoButton: FC<DeleteTodoButtonParams> = ({
	deleteTodo,
	todo,
}) => {
	const deleteClickHandler = (): void => {
		deleteTodo();
	};

	return (
		<button
			className='delete-todo'
			type='button'
			onClick={deleteClickHandler}
		/>
	);
};
