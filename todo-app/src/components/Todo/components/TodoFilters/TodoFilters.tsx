import { FilterButton } from '../UI/FilterButton/FIlterButton';
import './TodoFilter.css';

export const TodoFilters = () => {
	return (
		<div className='todo-filter'>
			<h3>Just take something!</h3>
			<input />
			<div className='todo-filter__buttons'>
				<FilterButton filterText='По дате' callback={() => console.log()} />
				<FilterButton filterText='По статусу' callback={() => console.log()} />
			</div>
		</div>
	);
};
