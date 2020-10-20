import React from 'react';
import { ScContainer, ScInnerText } from './todo.style';
import { TodoProps } from './todo.model';

const Todo: React.FC<TodoProps> = (props) => {
	return (
		<ScContainer
			data-testid="todo-wrapper"
			onClick={() => {
				if (typeof props.index === 'number') props.remove(props.index);
			}}
		>
			<ScInnerText data-testid="inner-text">{props.text}</ScInnerText>
		</ScContainer>
	);
};

export default Todo;
