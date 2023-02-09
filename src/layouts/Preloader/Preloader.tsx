import { useEffect, useRef, useState } from 'react';
import { StyledPreloader } from './StyledPreloader';
import { InputContainer } from './InputContainer';
import { OutputContainer } from './OutputContainer';
import { ChoicesConainer } from './ChoicesContainer';

export const Preloader = ({
	keyStroke,
	setPageId,
}: {
	keyStroke: string;
	setPageId: React.Dispatch<any>;
}) => {
	const [isWaiting, setIsWaiting] = useState(false);
	const [isPageChoosen, setIsPageChoosen] = useState(false);
	const [index, setIndex] = useState(0);
	const [phrasesList, setPhrasesList] = useState([
		'Hello.',
		'Let me introduce myself first...',
		'I am Bartosz',
		"And I'm working as a Web Developer",
		'What would you like to get to know about me?',
	]);

	const choosePage = (id: number) => {
		setPhrasesList([...phrasesList, 'Alright. Give me a second.']);
		setIsWaiting(false);
		setIsPageChoosen(true);
		setPageId(id);
	};

	return (
		<StyledPreloader>
			<OutputContainer
				phrasesList={phrasesList}
				isWaiting={isWaiting}
				setIsWaiting={setIsWaiting}
				index={index}
				setIndex={setIndex}
				isPageChoosen={isPageChoosen}
			/>
			{index + 1 > phrasesList.length && !isPageChoosen && (
				<ChoicesConainer
					keyStroke={keyStroke}
					choosePage={choosePage}
				/>
			)}
			<InputContainer
				phrasesList={phrasesList}
				isWaiting={isWaiting}
				setIsWaiting={setIsWaiting}
				index={index}
			/>
		</StyledPreloader>
	);
};
