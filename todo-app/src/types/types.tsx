export interface ITodoComment {
	id: number;
	title: string;
	description: string;
}

export interface ITodoItem {
	id: string;
	title: string;
	description: string;
	status: todoStatus;
	comments: ITodoComment[] | null;
}

export enum todoStatus {
	done = 'done',
	progress = 'progress',
}

export enum todosFilters {
	byStatus = 'byStatus',
	byDate = 'byDate',
}
export enum sortOrders {
	asc = 'asc',
	desc = 'desc',
}

export interface ICurrentTodoState {
	todo: ITodoItem | null;
}

export interface ISortConfig {
	method: todosFilters;
	order: sortOrders;
}

export interface ITodosState {
	todos: ITodoItem[];
	sortConfig: ISortConfig;
}
