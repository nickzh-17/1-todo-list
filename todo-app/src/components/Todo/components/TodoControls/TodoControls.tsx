import { FC } from 'react';
import { ControlButton } from '../UI/ControlButton/ControlButton';
import { controlMode } from '../UI/ControlButton/model';
import './TodoControls.css';

interface TodoControlsParams {
	onRemoveTodo: () => void;
	onToggleTodoStatus: () => void;
}

export const TodoControls: FC<TodoControlsParams> = ({
	onRemoveTodo,
	onToggleTodoStatus,
}) => {
	return (
		<div className='todo__controls'>
			<ControlButton
				controlOptions={{
					mode: controlMode.complete,
					clickHandler: () => onToggleTodoStatus(),
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
						onRemoveTodo();
					},
				}}
			/>
		</div>
	);
};
