import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { StyledOutputContainer } from './StyledOutputContainer';

export const OutputContainer = ({
	phrasesList,
	isWaiting,
	setIsWaiting,
	index,
	setIndex,
	isPageChoosen,
}: {
	phrasesList: Array<string>;
	isWaiting: boolean;
	setIsWaiting: Dispatch<SetStateAction<boolean>>;
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
	isPageChoosen: boolean;
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
				<span key={i}>
					{e}{' '}
					{i + 1 === phrasesList.length && !isPageChoosen && (
						<i>(Use arrows & enter to choose)</i>
					)}
				</span>
			))}
		</StyledOutputContainer>
	);
};
