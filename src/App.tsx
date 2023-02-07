import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Preloader } from './layouts/Preloader';

export const App = () => (
	<ThemeProvider theme={theme}>
		<Preloader />
		<GlobalStyles />
	</ThemeProvider>
);
