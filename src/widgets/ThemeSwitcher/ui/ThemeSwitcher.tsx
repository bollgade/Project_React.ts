
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import User from 'shared/assets/icons/user-32-32.png';

interface ThemeSwitcherProps {
	className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	const { className } = props;

	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className={classNames(cls.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</button>
	);
};