import styled from 'styled-components';
import { blink } from '../../styles/Animations';

export const StyledHeader = styled.div`
	width: 100vw;
	height: 8rem;

	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 8rem;

	& * {
		color: #a5c9ca;
		font-family: 'Fira Code', monospace;
		font-weight: 300;
		font-size: 1.8rem;

		white-space: nowrap;

		display: block;
		position: relative;
	}

	& span,
	& span::before {
		cursor: pointer;
	}

	& span:hover {
		color: #e7f6f2;

		&::before {
			color: #e7f6f2;
		}

		&::after {
			height: 100%;
			width: 2px;
			opacity: 1;

			display: block;
			content: '';

			position: absolute;
			right: -0.5rem;
			top: 50%;

			transform: translateY(-50%);

			background-color: #e7f6f2;

			animation: 0.5s infinite alternate ${blink};
		}
	}

	& span::before {
		height: 100%;
		width: 2rem;
		opacity: 1;

		display: block;
		content: '>';
		color: #a5c9ca;
		font-family: 'Fira Code', monospace;
		font-weight: 300;
		font-size: 1.8rem;

		position: absolute;
		left: -2rem;
		top: 50%;

		transform: translateY(-50%);
	}
`;
