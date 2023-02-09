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

	const choicesList = [
		'My description',
		'All of my skills',
		"The work experience I've got",
		'Some of the projects I made',
		'Contact info',
	];

	useLayoutEffect(() => {
		if (keyStroke.trim() === 'ArrowUp' && activeIndex > 0)
			setActiveIndex(activeIndex - 1);
		if (
			keyStroke.trim() === 'ArrowDown' &&
			activeIndex < choicesList.length - 1
		)
			setActiveIndex(activeIndex + 1);
		if (keyStroke.trim() === 'Enter') choosePage(activeIndex);
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
