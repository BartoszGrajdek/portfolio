import { useEffect, useState } from 'react';
import { Preloader } from '../Preloader';
import { StyledPage } from './StyledPage';

export const Page = ({ keyStroke }: { keyStroke: string }) => {
	const [isPreloaderShown, setIsPreloaderShown] = useState(true);
	const [pageId, setPageId] = useState(null);

	useEffect(() => {
		if (pageId) {
			setTimeout(() => {
				setIsPreloaderShown(false);
			}, 5000);
		}
	}, [pageId]);

	return (
		<StyledPage>
			{isPreloaderShown && (
				<Preloader keyStroke={keyStroke} setPageId={setPageId} />
			)}
		</StyledPage>
	);
};
