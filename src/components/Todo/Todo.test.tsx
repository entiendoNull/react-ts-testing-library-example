import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Todo from './Todo';

describe('[Todo]', () => {
	it('should be able to render', () => {
		const removeHandler = jest.fn();
		render(<Todo text="Hello world" remove={removeHandler} />);
	});

	it('should display text prop value', () => {
		const removeHandler = jest.fn();
		const { getByTestId } = render(
			<Todo text="Hello world" remove={removeHandler} />,
		);

		const target = getByTestId('inner-text');

		expect(target).toHaveTextContent('Hello world');
	});

	it('should return the index prop value in callback when clicked at', () => {
		const removeHandler = jest.fn();
		const { getByTestId } = render(
			<Todo text="Hello world" index={0} remove={removeHandler} />,
		);

		const target = getByTestId('todo-wrapper');

		fireEvent.click(target);

		expect(removeHandler).toHaveBeenCalledWith(0);
	});
});
