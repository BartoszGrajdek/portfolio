import { useState } from 'react';
import { StyledHeader } from './StyledHeader';
import { RenderedText } from '../../components/RenderedText/RenderedText';

export const Header = ({
	pageId,
	setPageId,
}: {
	pageId: null | number;
	setPageId: React.Dispatch<any>;
}) => {
	const items = [
		'About me',
		'Skills',
		'Experience',
		'Projects',
		'Contact me',
		'Resume',
	];

	return (
		<StyledHeader>
			{items.map((e, i) => (
				<RenderedText
					key={i}
					type="span"
					text={e}
					time={250}
					onClickFunc={() => setPageId(i)}
					delay={i * 250}
					customClass={pageId === i ? 'active' : ''}
				/>
			))}
		</StyledHeader>
	);
};
