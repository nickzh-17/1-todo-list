import classNames from 'classnames';
import { useActions } from 'hooks/useActions';
import { useFilter } from 'hooks/useFilter';
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
	const { filter } = useFilter();
	const { setFilter, setDefaultFilter } = useActions();

	const methodClickHandler = (
		newMethod: todosFilters,
		currentMethod: todosFilters
	) => {
		if (newMethod === currentMethod) return;

		setFilter(newMethod);
	};

	return (
		<button
			className={classNames('filter-button', {
				active: isFilterMethodSelected(method, filter),
			})}
			type='button'
			onClick={() => methodClickHandler(method, filter)}
		>
			{filterText}
		</button>
	);
};
