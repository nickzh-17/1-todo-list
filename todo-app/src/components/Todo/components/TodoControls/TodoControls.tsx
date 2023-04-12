import { FC } from 'react';
import { ITodoItem } from 'types/types';
import { ControlButton } from '../UI/ControlButton/ControlButton';
import { controlMode } from '../UI/ControlButton/model';
import './TodoControls.css';

interface TodoControlsParams {
	todo: ITodoItem | null;
}

export const TodoControls: FC<TodoControlsParams> = ({ todo }) => {
	return (
		<div className='todo__controls'>
			<ControlButton
				controlOptions={{
					mode: controlMode.complete,
					clickHandler: () => console.log('done'),
				}}
			/>
			<ControlButton
				controlOptions={{
					mode: controlMode.update,
					clickHandler: () => console.log('done'),
				}}
			/>
			<ControlButton
				controlOptions={{
					mode: controlMode.remove,
					clickHandler: () => {
						console.log('done');
						// todoContext?.removeTodo(todo)
					},
				}}
			/>
		</div>
	);
};
