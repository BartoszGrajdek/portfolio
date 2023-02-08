import styled from 'styled-components';

export const StyledPreloader = styled.div`
	height: 100vh;
	width: 100vw;
	padding: 20vh 20vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	& svg {
		height: 20rem;
	}
`;
