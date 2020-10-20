import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import InputSet from './InputSet';

describe('[InputSet]', () => {
	afterEach(cleanup);

	it('should be able to render', () => {
		const submitHandler = jest.fn();
		render(<InputSet btnText="Submit" submit={submitHandler} />);
	});

	it('should provide a string as callback when submitted', () => {
		const submitHandler = jest.fn();
		const { getByTestId } = render(
			<InputSet btnText="Submit" submit={submitHandler} />,
		);

		const input = getByTestId('input') as HTMLInputElement;
		const btn = getByTestId('btn') as HTMLInputElement;

		fireEvent.change(input, { target: { value: 'fluff' } });
		fireEvent.click(btn, {});

		expect(submitHandler).toHaveBeenCalledWith('fluff');
	});

	it('should clear text input when submitted', () => {
		const submitHandler = jest.fn();
		const { getByTestId } = render(
			<InputSet btnText="Submit" submit={submitHandler} />,
		);

		const btn = getByTestId('btn') as HTMLInputElement;
		const input = getByTestId('input') as HTMLInputElement;

		fireEvent.change(input, { target: { value: 'fluff' } });
		fireEvent.click(btn, {});

		expect(input.value).toBe('');
	});
});
