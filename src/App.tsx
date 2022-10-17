import { useContext, useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { ThemeContext } from './contexts/ThemeContext';
import { ThemeClass } from './models/common';

const defaultTheme: ThemeClass = 'dark';

function App(): JSX.Element {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [themeClass, setThemeClass] = useState<ThemeClass>(
		theme !== 'auto' ? theme : defaultTheme
	);

	useEffect(() => {
		if (theme === 'auto') {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				setThemeClass('dark');
			} else {
				setThemeClass('light');
			}
			const setTheme = (event: MediaQueryListEvent) => {
				toggleTheme(event.matches ? 'dark' : 'light');
				setThemeClass(event.matches ? 'dark' : 'light');
			};
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.addEventListener('change', setTheme);
			return () => {
				window
					.matchMedia('(prefers-color-scheme: dark)')
					.removeEventListener('change', setTheme);
			};
		} else {
			setThemeClass(theme);
		}
	}, [theme, toggleTheme, setThemeClass]);

	return (
		<div className={themeClass}>
			<Navigation />
		</div>
	);
}

export default App;
