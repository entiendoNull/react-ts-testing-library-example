import React from 'react';
import lodash from 'lodash';
import Column from '../../components/Column/Column';
import InputSet from '../../components/InputSet/InputSet';
import Todo from '../../components/Todo/Todo';
import { TodoText } from '../../components/Todo/todo.model';
import { ScContainer } from './todos.style';

const Todos: React.FC = () => {
	const [todos, setTodos] = React.useState<TodoText[]>([]);

	const addTodoHandler = React.useCallback((value: string) => {
		if (!value) return;
		setTodos((state) => lodash.concat(state, { text: value }));
	}, []);

	const removeTodoHandler = React.useCallback((index: number) => {
		setTodos((state) => state.filter((item, key) => key !== index));
	}, []);

	return (
		<ScContainer>
			<Column>
				<InputSet btnText="Submit" submit={addTodoHandler} />
			</Column>
			<Column>
				{!todos.length && 'Det finns inga todos...'}

				{todos.map((todo, index) => (
					<Todo
						key={index}
						remove={removeTodoHandler}
						index={index}
						text={todo.text}
					/>
				))}
			</Column>
		</ScContainer>
	);
};

export default Todos;
