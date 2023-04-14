import { DEFAULT_SORT_CONFIG } from 'store/todos/todos.slice';
import { ISortConfig } from 'types/types';

export const isSortConfigDefault = (sortConfig: ISortConfig) =>
	DEFAULT_SORT_CONFIG.method === sortConfig.method &&
	DEFAULT_SORT_CONFIG.order === sortConfig.order;
