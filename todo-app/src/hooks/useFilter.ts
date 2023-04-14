import { useTypedSelector } from './useTypedSelector';

export const useSortConfig = () => {
	const sortConfig = useTypedSelector(state => state.todosState.sortConfig);

	return { sortConfig };
};
