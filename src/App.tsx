import { useContext, useEffect } from 'react';
import Navigation from './components/Navigation';
import { ThemeContext } from './contexts/ThemeContext';

function App(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (window.matchMedia && theme === 'auto') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme('dark');
      }
      const setTheme = (event: MediaQueryListEvent) => {
        toggleTheme(event.matches ? 'dark' : 'light');
      };
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', setTheme);
      return () => {
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeEventListener('change', setTheme);
      };
    }
  }, [theme]);

  return (
    <div className={theme}>
      <Navigation />
    </div>
  );
}

export default App;
