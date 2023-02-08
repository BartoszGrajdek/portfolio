import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { StyledInputContainer } from './StyledInputContainer';
import { typewriter } from '../../helpers/typewriter';

export const InputContainer = ({
	phrasesList,
	isWaiting,
	setIsWaiting,
	index,
}: {
	phrasesList: Array<string>;
	isWaiting: boolean;
	setIsWaiting: Dispatch<SetStateAction<boolean>>;
	index: number;
}) => {
	const [text, setText] = useState('');

	useEffect(() => {
		if (!isWaiting && phrasesList.length >= index + 1) {
			setTimeout(() => {
				typewriter(phrasesList[index], text, setText, setIsWaiting, 0);
			}, 500);
		} else {
			let temp = '';
			temp = temp.replace(/\s+/g, '');
			setText(temp);
		}
	}, [isWaiting]);

	return (
		<StyledInputContainer>
			<span>{'>'}</span>
			<p>{text ? text : '  '}</p>
			<i></i>
		</StyledInputContainer>
	);
};
