import React, { FC } from 'react';
import './TextField.css';

interface TextFieldParams {
	value: string;
	fieldChangeHandler: (newValue: string) => void;
	title: string;
}

export const TextField: FC<TextFieldParams> = ({
	value,
	fieldChangeHandler,
	title,
}) => {
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
		fieldChangeHandler(event.target.value);

	return (
		<div className='text-field'>
			<label className='text-field__label' htmlFor={title}>
				{title}
			</label>
			<input
				className='text-field__input'
				type='text'
				name={title}
				value={value}
				onChange={changeHandler}
			/>
		</div>
	);
};
