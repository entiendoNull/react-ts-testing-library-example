import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Input from './Input';

describe('[Input]', () => {
	afterEach(cleanup);

	it('should be able to render', () => {
		render(<Input changed={() => console.log('fluff')} />);
	});

	it('should call "changed" prop with target value as param when changed', () => {
		const changedHandler = jest.fn();

		const { getByTestId } = render(<Input changed={changedHandler} />);

		fireEvent.change(getByTestId('input'), { target: { value: 'hello' } });

		expect(changedHandler).toHaveBeenCalledWith('hello');
	});

	it('should use prop value as display value', () => {
		const changedHandler = jest.fn();

		const { getByTestId } = render(
			<Input value="Hello" changed={changedHandler} />,
		);
		const input = getByTestId('input') as HTMLInputElement;

		expect(input.value).toBe('Hello');
	});
});
