import classNames from 'classnames';
import { useActions } from 'hooks/useActions';
import { useSortConfig } from 'hooks/useFilter';
import { FC } from 'react';
import { todosFilters } from 'types/types';
import './FilterButton.css';

const isFilterMethodSelected = (
	method: todosFilters,
	currentMethod: todosFilters
) => method === currentMethod;

interface FilterButtonParams {
	filterText: string;
	callback: () => void;
	method: todosFilters;
}

export const FilterButton: FC<FilterButtonParams> = ({
	filterText,
	callback,
	method,
}) => {
	const { sortConfig } = useSortConfig();
	const { setSortMethod, setDefaultFilter } = useActions();

	const methodClickHandler = (
		newMethod: todosFilters,
		currentMethod: todosFilters
	) => {
		if (newMethod === currentMethod) return;

		setSortMethod(newMethod);
	};

	return (
		<button
			className={classNames('filter-button', {
				active: isFilterMethodSelected(method, sortConfig.method),
			})}
			type='button'
			onClick={() => methodClickHandler(method, sortConfig.method)}
		>
			{filterText}
		</button>
	);
};
