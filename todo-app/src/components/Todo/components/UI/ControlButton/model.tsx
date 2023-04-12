export interface ControlButtonProps {
	controlOptions: IControlOptions;
}

export interface IControlOptions {
	mode: controlMode;
	clickHandler: () => void;
}

export enum controlMode {
	remove = 'remove',
	complete = 'complete',
	update = 'update',
}

export interface controlModeData {
	mode: controlMode;
	text: string;
	className: string;
}

export const controlButtonConfigs = new Map<controlMode, controlModeData>([
	[
		controlMode.complete,
		{
			mode: controlMode.complete,
			text: 'Done',
			className: 'todo__control-button--complete',
		},
	],
	[
		controlMode.update,
		{
			mode: controlMode.update,
			text: 'Change',
			className: 'todo__control-button--update',
		},
	],
	[
		controlMode.remove,
		{
			mode: controlMode.remove,
			text: 'Remove',
			className: 'todo__control-button--remove',
		},
	],
]);
