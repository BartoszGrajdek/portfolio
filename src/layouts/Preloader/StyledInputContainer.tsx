import styled from 'styled-components';
import { blink } from '../../styles/Animations';

export const StyledInputContainer = styled.div`
	padding: 2rem;
	width: 100%;
	background-color: #395b64;

	display: flex;
	align-items: center;
	justify-content: flex-start;
	column-gap: 0.25rem;

	& > * {
		color: #e7f6f2;
		font-family: 'Fira Code', monospace;
		font-weight: 300;
		font-size: 2rem;

		position: relative;
	}

	& p {
		margin-left: 1.75rem;
	}

	i {
		height: 100%;
		width: 2px;
		opacity: 1;

		display: block;
		content: '';

		background-color: #e7f6f2;

		animation: 0.5s infinite alternate ${blink};
	}
`;
