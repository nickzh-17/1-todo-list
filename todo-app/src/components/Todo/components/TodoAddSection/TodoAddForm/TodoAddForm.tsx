import { useActions } from 'hooks/useActions';
import { FC, useState } from 'react';
import { ITodoItem, todoStatus } from 'types/types';
import { TextField } from './TextField/TextField';

import './TodoAddForm.css';

interface TodoAddFormParams {
	todos: ITodoItem[] | null;
}

type FormValues = {
	title: string;
	description: string;
};

const getNewId = () => Math.random().toString();

export const TodoAddForm: FC<TodoAddFormParams> = ({ todos }) => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	const { addTodo } = useActions();

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newTodo: ITodoItem = {
			id: getNewId(),
			title: title,
			description: description,
			status: todoStatus.progress,
			comments: null,
		};
		addTodo(newTodo);
	};

	return (
		<div>
			<form className='add-form' onSubmit={submitHandler}>
				<div className='add-form__fields-section'>
					<TextField
						title='Title'
						value={title}
						fieldChangeHandler={setTitle}
					/>
					<TextField
						title='Description'
						value={description}
						fieldChangeHandler={setDescription}
					/>
				</div>
				<button className='add-form__button' type='submit'>
					Add Todo
				</button>
			</form>
		</div>
	);
};
