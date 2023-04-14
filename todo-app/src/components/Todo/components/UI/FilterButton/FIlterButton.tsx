import classNames from 'classnames';
import { useActions } from 'hooks/useActions';
import { useSortConfig } from 'hooks/useFilter';
import { FC } from 'react';
import { sortMethods, sortOrders } from 'types/types';
import './FilterButton.css';

const isFilterMethodSelected = (
	method: sortMethods,
	currentMethod: sortMethods
) => method === currentMethod;

interface FilterButtonParams {
	filterText: string;
	callback: () => void;
	method: sortMethods;
}

export const FilterButton: FC<FilterButtonParams> = ({
	filterText,
	callback,
	method,
}) => {
	const { sortConfig } = useSortConfig();
	const { setSortMethod, setSortOrder } = useActions();

	const methodClickHandler = (
		newMethod: sortMethods,
		currentMethod: sortMethods
	) => {
		if (newMethod === currentMethod) {
			const toggledOrder =
				sortConfig.order === sortOrders.asc ? sortOrders.desc : sortOrders.asc;

			setSortOrder(toggledOrder);
			return;
		}

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
