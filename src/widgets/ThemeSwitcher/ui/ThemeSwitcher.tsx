
import { useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
	className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
	const { className } = props;

	const { toggleTheme } = useTheme();

	return (
		<button
			className={classNames(cls.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			Toggle Theme
		</button>
	);
};