import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { currentTodoActions } from 'store/todos/currentTodo.slice';
import { actions } from 'store/todos/todos.slice';

const rootActions = {
	...actions,
	...currentTodoActions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
