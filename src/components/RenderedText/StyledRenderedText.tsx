import styled from 'styled-components';
import { blink } from '../../styles/Animations';

export const StyledRenderedTextSpan = styled.span`
	&.writing::after {
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
`;
