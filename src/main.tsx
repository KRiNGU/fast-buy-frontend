import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeState } from './contexts/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<ThemeState>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeState>
	</StrictMode>
);
