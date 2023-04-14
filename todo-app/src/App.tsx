import { FC } from 'react';
import { Todo } from './components/Todo/Todo';

import './styles/App.css';

export const App: FC = () => {
	return (
		<div className='app'>
			<h1 className='app__heading'>Todo App</h1>
			<div className='app__body'>
				<Todo />
			</div>
		</div>
	);
};
