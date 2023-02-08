import { useLayoutEffect, useState } from 'react';
import { StyledChoicesContainer } from './StyledChoicesContainer';

export const ChoicesConainer = ({
	keyStroke,
	choosePage,
}: {
	keyStroke: string;
	choosePage: (id: number) => void;
}) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const choicesList = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];

	useLayoutEffect(() => {
		if (keyStroke.trim() === 'ArrowUp' && activeIndex > 0)
			setActiveIndex(activeIndex - 1);
		if (keyStroke.trim() === 'ArrowDown' && activeIndex < 3)
			setActiveIndex(activeIndex + 1);
		if (keyStroke.trim() === 'Enter') choosePage(1);
	}, [keyStroke]);

	return (
		<StyledChoicesContainer>
			{choicesList.map((e, i) => (
				<span className={activeIndex === i ? '' : 'inactive'} key={i}>
					{e}
				</span>
			))}
		</StyledChoicesContainer>
	);
};
