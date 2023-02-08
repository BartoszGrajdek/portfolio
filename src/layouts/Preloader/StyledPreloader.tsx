import styled from 'styled-components';

export const StyledPreloader = styled.div`
	height: 100%;
	width: 100%;
	padding: 20% 20%;
	background-color: #2c3333;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	& svg {
		height: 20rem;
	}
`;
