import { useState } from 'react';
import { StyledPreloader } from './StyledPreloader';
import { InputContainer } from './InputContainer';
import { OutputContainer } from './OutputContainer';

export const Preloader = () => {
	const [isWaiting, setIsWaiting] = useState(false);
	const [index, setIndex] = useState(0);

	const phrasesList = [
		'Hello.',
		'Let me introduce myself first...',
		'I am Bartosz',
		"And I'm working as a Web Developer",
	];

	return (
		<StyledPreloader>
			<OutputContainer
				phrasesList={phrasesList}
				isWaiting={isWaiting}
				setIsWaiting={setIsWaiting}
				index={index}
				setIndex={setIndex}
			/>
			<InputContainer
				phrasesList={phrasesList}
				isWaiting={isWaiting}
				setIsWaiting={setIsWaiting}
				index={index}
			/>
		</StyledPreloader>
	);
};
