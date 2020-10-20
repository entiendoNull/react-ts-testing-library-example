import React from 'react';
import { ScContainer } from './column.style';

interface Props {}

const Column: React.FC<Props> = (props) => {
	return <ScContainer>{props.children}</ScContainer>;
};

export default Column;
