import { ITodoItem, todoStatus } from 'types/types';

export const constantData: ITodoItem[] = [
	{
		id: '1',
		title: 'Learn HTML and HTML5',
		description: `HTML, or Hypertext Markup Language, is a markup language for the web that defines the structure of web pages`,
		status: todoStatus.progress,
		comments: [],
	},
	{
		id: '2',
		title: 'Learn CSS',
		description:
			'CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes',
		status: todoStatus.progress,
		comments: [],
	},
	{
		id: '3',
		title: 'Sleep',
		description: 'about 8 hours about 8 hours',
		status: todoStatus.progress,
		comments: [],
	},
];
