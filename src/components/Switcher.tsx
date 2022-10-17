import { ThemeContext } from '@/contexts/ThemeContext';
import { Theme } from '@/models/common';
import { memo, useContext } from 'react';
import styled from 'styled-components';
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';
import gear from '../assets/gear.svg';

const SwitcherContainer = styled.fieldset`
	--border-radius: 20px;
	width: max-content;
	margin-top: 50px;
	padding: 2px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	border: 1px solid var(--font-color-primary);
	border-radius: var(--border-radius);
	position: relative;
	align-self: center;
`;

const SwitcherBorderer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -2;
	border-radius: var(--border-radius);
`;

const SwitcherInput = styled.input`
	appearance: none;
	margin: 0;
	width: 32px;
	height: 32px;
	transition: filter 0.1s ease-in;
	border-width: 0;
	background-position: center;
	background-size: 24px;
	background-repeat: no-repeat;
	border-radius: 50%;
	filter: var(--invert);
	cursor: pointer;
	&:checked {
		filter: var(--counter-invert);
	}
	&:focus-visible ~ .switcher_borderer {
		box-shadow: 0 0 5px 5px var(--color-primary_shadow);
	}
`;

const SwitcherLegend = styled.legend`
	position: absolute;
	opacity: 0;
	pointer-events: none;
`;

const Status = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: -1;
	border-radius: 50%;
	background-color: var(--font-color-primary);
	width: 32px;
	height: 32px;
	transition: left 0.4s;
`;

const Switcher = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const handleClick = (mode: Theme) => {
		toggleTheme(mode);
	};
	return (
		<SwitcherContainer>
			<SwitcherLegend>Sheme</SwitcherLegend>
			<SwitcherInput
				type="radio"
				name="color-cheme"
				value="light"
				aria-label="Light"
				style={{ backgroundImage: `url(${light})` }}
				onClick={(e: React.MouseEvent<HTMLInputElement>) =>
					handleClick(e.currentTarget.value as Theme)
				}
				defaultChecked={theme === 'light'}
			/>
			<SwitcherInput
				type="radio"
				name="color-cheme"
				value="auto"
				aria-label="System"
				style={{ backgroundImage: `url(${gear})` }}
				onClick={(e: React.MouseEvent<HTMLInputElement>) =>
					handleClick(e.currentTarget.value as Theme)
				}
				defaultChecked={theme === 'auto'}
			/>
			<SwitcherInput
				type="radio"
				name="color-cheme"
				value="dark"
				aria-label="Dark"
				style={{ backgroundImage: `url(${dark})` }}
				onClick={(e: React.MouseEvent<HTMLInputElement>) =>
					handleClick(e.currentTarget.value as Theme)
				}
				defaultChecked={theme === 'dark'}
			/>
			<SwitcherBorderer className="switcher_borderer"></SwitcherBorderer>
			<Status
				style={{
					left:
						theme === 'light'
							? '2px'
							: theme === 'auto'
							? 'calc(50% - 16px)'
							: 'calc(100% - 34px)',
				}}
			></Status>
		</SwitcherContainer>
	);
};

export default memo(Switcher);
