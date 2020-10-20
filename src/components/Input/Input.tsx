import React from 'react';
import { InputProps } from './input.model';
import { ScInput } from './Input.style';

const Input: React.FC<InputProps> = (props) => {
	return (
		<ScInput
			type="text"
			data-testid="input"
			value={props.value}
			onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
				const value = ev.target.value;
				props.changed(value);
			}}
		/>
	);
};

export default Input;
