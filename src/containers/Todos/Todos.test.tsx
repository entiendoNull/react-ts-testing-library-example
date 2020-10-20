import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Todos from './Todos';

describe('[Todos]', () => {
	afterEach(cleanup);

	it('should be able to render', () => {
		render(<Todos />);
	});

	it('should be able to add a todo', () => {
		const { getByTestId, getAllByTestId } = render(<Todos />);

		// const todos = getByTestId('todos-wrapper');
		const input = getByTestId('input');
		const btn = getByTestId('btn');

		fireEvent.change(input, { target: { value: 'test' } });
		fireEvent.click(btn);

		const todos = getAllByTestId('todo-wrapper');

		expect(todos).toHaveLength(1);
	});

	it('should be able to add various todos', () => {
		const { getByTestId, getAllByTestId } = render(<Todos />);

		// const todos = getByTestId('todos-wrapper');
		const input = getByTestId('input');
		const btn = getByTestId('btn');

		for (let x = 1; x <= 3; x++) {
			fireEvent.change(input, { target: { value: 'test' } });
			fireEvent.click(btn);
		}

		const todos = getAllByTestId('todo-wrapper');

		expect(todos).toHaveLength(3);
	});

	it('should be append new todos', () => {
		const { getByTestId, getAllByTestId } = render(<Todos />);

		// const todos = getByTestId('todos-wrapper');
		const input = getByTestId('input');
		const btn = getByTestId('btn');

		// adding 3 todos
		for (let x = 1; x <= 3; x++) {
			fireEvent.change(input, { target: { value: `test${x}` } });
			fireEvent.click(btn);
		}

		const todo = getAllByTestId('todo-wrapper');

		// last todo should have text content "test3"
		expect(todo[2]).toHaveTextContent('test3');
	});

	it('should not be able to add an empty string as todo', () => {
		const { getByTestId, queryByTestId } = render(<Todos />);

		// const todos = getByTestId('todos-wrapper');
		const input = getByTestId('input');
		const btn = getByTestId('btn');

		fireEvent.change(input, { target: { value: '' } });
		fireEvent.click(btn);

		// using query, as we don't know if there actually are any
		const todo = queryByTestId('todo-wrapper');

		expect(todo).not.toBeInTheDocument();
	});

	it('should notify by text if no todos were added', () => {
		const { queryByTestId } = render(<Todos />);

		const todo = queryByTestId('todo-wrapper');

		expect(todo).not.toBeInTheDocument();
	});
});
