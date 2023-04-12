import classNames from 'classnames';
import { FC } from 'react';

import './ControlButton.css';
import { controlButtonConfigs, ControlButtonProps } from './model';

export const ControlButton: FC<ControlButtonProps> = ({ controlOptions }) => {
	const buttonConfigData = controlButtonConfigs.get(controlOptions.mode);

	return (
		<button
			onClick={controlOptions.clickHandler}
			className={classNames(
				'todo__control-button',
				buttonConfigData?.className
			)}
		>
			{buttonConfigData?.text}
		</button>
	);
};
