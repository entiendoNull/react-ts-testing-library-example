import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Column from './Column';

describe('[Column]', () => {
	afterEach(cleanup);

	it('should be able to render', () => {
		render(<Column />);
	});
});
