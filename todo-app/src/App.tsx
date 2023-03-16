import { FC } from 'react';
import './styles/App.css';

export const App: FC = () => {
	return (
		<div className='app'>
			<h1 className='app__heading'>Todo App</h1>
			<div className='app-wrapper'>
				<div className='todo__header'>header</div>
				<div className='todo__list'>list</div>
				<div className='todo__item'>item</div>
			</div>
		</div>
	);
};
