import { Theme } from '@/models/common';
import { createContext, memo, ReactNode, useCallback, useState } from 'react';

export type IThemeContext = {
	theme: Theme;
	toggleTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<IThemeContext>({
	theme: 'auto',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toggleTheme: () => {},
});

export type IThemeState = {
	children: ReactNode;
};

export const ThemeState = memo(({ children }: IThemeState) => {
	const [theme, setTheme] = useState<Theme>(
		(localStorage.getItem('theme') as Theme) ?? 'auto'
	);

	const toggleTheme = useCallback(
		(newTheme: Theme) => {
			if (newTheme !== theme) {
				if (newTheme === 'auto') {
					localStorage.removeItem('theme');
					setTheme(newTheme);
				} else {
					localStorage.setItem('theme', newTheme);
					setTheme(newTheme);
				}
			}
		},
		[setTheme, localStorage, theme]
	);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
});
