import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { StyledOutputContainer } from './StyledOutputContainer';

export const OutputContainer = ({
	phrasesList,
	isWaiting,
	setIsWaiting,
	index,
	setIndex,
}: {
	phrasesList: Array<string>;
	isWaiting: boolean;
	setIsWaiting: Dispatch<SetStateAction<boolean>>;
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
}) => {
	const [list, setList] = useState([]);

	useEffect(() => {
		if (isWaiting) {
			setList([...list, phrasesList[index]]);
			setIndex(index + 1);
			setTimeout(() => setIsWaiting(false), 500);
		}
	}, [isWaiting]);

	return (
		<StyledOutputContainer>
			{list.map((e, i) => (
				<span key={i}>{e}</span>
			))}
		</StyledOutputContainer>
	);
};
