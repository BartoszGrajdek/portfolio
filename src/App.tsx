import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Page } from './layouts/Page/Page';

export const App = () => {
	const [keyStroke, setKeyStroke] = React.useState('');
	const ref = React.useRef(null);

	React.useEffect(() => {
		ref.current.focus();
	}, []);

	const keyDownHandler = (e: any) => {
		setKeyStroke(e.key !== keyStroke ? e.key : e.key + ' ');
	};

	return (
		<ThemeProvider theme={theme}>
			<div ref={ref} onKeyDown={keyDownHandler} tabIndex={0}>
				<Page keyStroke={keyStroke} />
				<GlobalStyles />
			</div>
		</ThemeProvider>
	);
};
