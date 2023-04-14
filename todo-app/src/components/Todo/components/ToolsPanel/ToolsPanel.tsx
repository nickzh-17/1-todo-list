import { TodoAddSection } from '../TodoAddSection/TodoAddSection';
import { TodoFilters } from '../TodoFilters/TodoFilters';
import './ToolsPanel.css';

export const ToolsPanel = () => {
	return (
		<div className='tools-panel'>
			<TodoAddSection />
			<TodoFilters />
		</div>
	);
};
