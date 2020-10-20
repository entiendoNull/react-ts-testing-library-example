import styled from 'styled-components/macro';

export const ScContainer = styled.button`
	background-color: #4fd8f0;
	box-shadow: inset 10px 10px 0px -1px rgba(47, 96, 128, 1);
	height: 56px;
	font-size: 32px;
	padding-left: 16px;
	padding-right: 16px;
	border: 0;
	cursor: pointer;

	:focus  {
		outline: none;
	}

	:hover {
		opacity: 0.5;
	}
`;
