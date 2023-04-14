import { useTypedSelector } from './useTypedSelector';

export const useFilter = () => {
	const filter = useTypedSelector(state => state.todosState.filter);

	return { filter };
};
