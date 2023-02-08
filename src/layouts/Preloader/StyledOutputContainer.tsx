import styled from 'styled-components';

export const StyledOutputContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	row-gap: 2rem;
	column-gap: 2rem;

	& span {
		width: 100%;
		padding-left: 3rem;
		display: block;

		color: #e7f6f2;
		font-family: 'Fira Code', monospace;
		font-weight: 300;
		font-size: 2rem;

		position: relative;

		&::before {
			display: block;
			content: '>';
			position: absolute;
			left: 0;
			top: 50%;

			transform: translateY(-50%);

			color: #e7f6f2;
			font-family: 'Fira Code', monospace;
			font-weight: 300;
			font-size: 2rem;
		}
	}
`;
