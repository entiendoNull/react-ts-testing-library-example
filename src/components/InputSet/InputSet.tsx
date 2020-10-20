import React from 'react';
import styled from 'styled-components/macro';
import Button from '../Button/Button';
import Column from '../Column/Column';
import Input from '../Input/Input';
import { InputSetProps } from './inputset.model';

const InputSet: React.FC<InputSetProps> = (props) => {
	const [text, setText] = React.useState<string>('');

	return (
		<ScContainer>
			<Column>
				<Input value={text} changed={setText} />
			</Column>
			<Column>
				<Button
					text={props.btnText}
					pressed={() => {
						setText('');
						props.submit(text);
					}}
				/>
			</Column>
		</ScContainer>
	);
};

export default InputSet;

const ScContainer = styled.div`
	display: flex;
`;
