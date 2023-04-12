import { useTypedSelector } from './useTypedSelector';

export const useTodos = () => {
	const todos = useTypedSelector(state => state.todos);

	return { todos };
};
