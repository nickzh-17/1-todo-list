import { FC, useState } from 'react';
import { ITodoItem } from '../../../types/types';

import './TodoAddForm.css';

interface TodoAddFormParams {
	addTodo: (todoItem: ITodoItem) => void;
	todos: ITodoItem[] | null;
}

type FormValues = {
	title: string;
	description: string;
};

const getNewId = (todos: ITodoItem[] | null) =>
	todos && todos.length ? todos[todos.length - 1].id : 1;

export const TodoAddForm: FC<TodoAddFormParams> = ({ todos, addTodo }) => {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	const titleChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setTitle(event.target.value);
	};
	const descriptionChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setDescription(event.target.value);
	};

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newTodo: ITodoItem = {
			id: getNewId(todos),
			title: title,
			description: description,
			comments: null,
		};
		addTodo(newTodo);
	};

	return (
		<div>
			<form className='add-form' onSubmit={submitHandler}>
				<div className='add-form__fields-section'>
					<input
						placeholder='Title'
						value={title}
						onChange={titleChangeHandler}
					/>
					<input
						placeholder='Description'
						value={description}
						onChange={descriptionChangeHandler}
					/>
				</div>
				<button className='add-form__button' type='submit'>
					Add Todo
				</button>
			</form>
		</div>
	);
};
