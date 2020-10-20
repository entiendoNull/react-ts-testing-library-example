export interface TodoText {
	text: string;
}

export interface TodoProps extends TodoText {
	index?: number;
	remove: (index: number) => void;
}
