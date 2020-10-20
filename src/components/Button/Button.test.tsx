import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
// import fireEvent from '@testing-library/user-event';
import Button from './Button';

describe('[Button]', () => {
	afterEach(cleanup);

	it('should be able to render', () => {
		render(<Button text="Submit" pressed={() => console.log('fluff')} />);
	});

	it('should call "pressed" prop when clicked at', () => {
		const clickedHandler = jest.fn();

		render(<Button text="Submit" pressed={clickedHandler} />);

		fireEvent.click(screen.getByText(/Submit/i));
		expect(clickedHandler).toHaveBeenCalledTimes(1);
	});

	it('should display "text" prop value as button text', () => {
		const clickedHandler = jest.fn();

		const { getByTestId } = render(
			<Button text="Submit" pressed={clickedHandler} />,
		);
		const textElem = getByTestId('btn-text');

		expect(textElem.textContent).toEqual('Submit');
	});
});
