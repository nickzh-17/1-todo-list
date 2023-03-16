export interface ITodoComment {
	id: number;
	title: string;
	description: string;
}

export interface ITodoItem {
	id: number;
	title: string;
	description: string;
	comments: ITodoComment[] | null;
}
