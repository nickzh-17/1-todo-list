import { FC } from 'react';
import './FilterButton.css';

interface FilterButtonParams {
	filterText: string;
	callback: () => void;
}

export const FilterButton: FC<FilterButtonParams> = ({
	filterText,
	callback,
}) => {
	return (
		<button className='filter-button' type='button' onClick={() => callback()}>
			{filterText}
		</button>
	);
};
