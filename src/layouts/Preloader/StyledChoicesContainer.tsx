import styled from 'styled-components';
import { fadeIn } from '../../styles/Animations';

export const StyledChoicesContainer = styled.div`
	width: 100%;
	margin-bottom: 4rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	row-gap: 2rem;
	column-gap: 2rem;

	animation: 0.5s 1 ${fadeIn};

	& span {
		width: 100%;
		padding-left: 3rem;
		display: block;

		color: #e7f6f2;
		font-family: 'Fira Code', monospace;
		font-weight: 300;
		font-size: 2rem;

		transition: all 0.2s ease-out;

		position: relative;

		&::before {
			display: block;
			content: '>';
			position: absolute;
			left: 0;
			top: 50%;
			opacity: 1;

			transform: translateY(-50%);
			transition: all 0.2s ease-out;

			color: #e7f6f2;
			font-family: 'Fira Code', monospace;
			font-weight: 300;
			font-size: 2rem;
		}
	}

	& span.inactive {
		color: #a5c9ca;

		&::before {
			opacity: 0;
		}
	}
`;
