import { useMemo } from 'react';
import { DEFAULT_SORT_CONFIG } from 'store/todos/todos.slice';
import {
	ISortConfig,
	ITodoItem,
	sortMethods,
	sortOrders,
	todoStatus,
} from 'types/types';

export const useSortedTodosByDate = (
	todos: ITodoItem[],
	sortConfig: ISortConfig
) => {
	const sortedTodosByDate = useMemo(() => {
		const orderSign: number = sortConfig.order === sortOrders.asc ? 1 : -1;

		return [...todos].sort(
			(a, b) =>
				orderSign * (Date.parse(a.creationDate) - Date.parse(b.creationDate))
		);
	}, [todos, sortConfig]);

	return sortedTodosByDate;
};

export const useSortedTodosByStatus = (
	todos: ITodoItem[],
	sortConfig: ISortConfig
) => {
	const currentDateConfig: ISortConfig =
		sortConfig.method === sortMethods.byDate ? sortConfig : DEFAULT_SORT_CONFIG;

	const sortedTodosByDate = useSortedTodosByDate(todos, currentDateConfig);

	// if Method = byStatus
	const sortedTodosByStatus = useMemo(() => {
		const orderSign: number = sortConfig.order === sortOrders.asc ? 1 : -1;

		return [...sortedTodosByDate].sort((a, b) => {
			if (a.status === b.status) return 0;
			if (a.status === todoStatus.done && b.status === todoStatus.progress)
				return 1 * orderSign;
			if (b.status === todoStatus.done && a.status === todoStatus.progress)
				return -1 * orderSign;
			return 0;
		});
	}, [todos, sortConfig]);

	if (sortConfig.method === sortMethods.byDate) return sortedTodosByDate;

	return sortedTodosByStatus;
};
