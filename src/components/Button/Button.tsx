import React from 'react';
import { ButtonProps } from './button.model';
import { ScContainer } from './button.style';

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<ScContainer data-testid="btn" onClick={() => props.pressed()}>
			<span data-testid="btn-text">Submit</span>
		</ScContainer>
	);
};

export default Button;
