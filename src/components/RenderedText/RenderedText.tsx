import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { StyledRenderedTextSpan } from './StyledRenderedText';

export const RenderedText = ({
	type,
	text,
	time,
	onClickFunc,
	delay,
	customClass,
}: {
	type: string | undefined;
	text: string;
	time: number;
	onClickFunc: any;
	delay: number;
	customClass: string;
}) => {
	const [isWaiting, setIsWaiting] = useState(true);
	const [finished, setFinished] = useState(false);
	const [renderedText, setRenderedText] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setIsWaiting(false);
		}, delay);
		setTimeout(() => {
			const characters = text.split('');
			typewriter(
				text,
				renderedText,
				setRenderedText,
				setFinished,
				0,
				time / characters.length
			);
		}, delay);
	}, []);

	switch (type) {
		default:
			if (isWaiting) {
				return <i></i>;
			} else {
				return (
					<StyledRenderedTextSpan
						onClick={onClickFunc ? onClickFunc : () => {}}
						className={`${!finished ? 'writing' : ''} ${
							customClass ? customClass : ''
						}`}
					>
						{renderedText}
					</StyledRenderedTextSpan>
				);
			}
	}
};

export const typewriter = (
	string: string,
	currentString: string,
	setString: Dispatch<SetStateAction<string>>,
	setFinished: Dispatch<SetStateAction<boolean>>,
	index: number,
	maxTime: number
) => {
	const interval = Math.floor(Math.random() * (maxTime - 10 + 1) + 10);
	const letters = string.split('');
	if (index + 1 <= letters.length) {
		const character = letters[index];
		const tempString = currentString + character;
		setString(tempString);
		setTimeout(
			() =>
				typewriter(
					string,
					tempString,
					setString,
					setFinished,
					index + 1,
					maxTime
				),
			interval
		);
	} else {
		setFinished(true);
	}
};
