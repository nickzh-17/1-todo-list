import { useTypedSelector } from './useTypedSelector';

export const useCurrentTodo = () => {
	const currentTodo = useTypedSelector(state => state.currentTodo.todo);

	return { currentTodo };
};
