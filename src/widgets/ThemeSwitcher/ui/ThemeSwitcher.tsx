import { useTheme } from 'app/providers/ThemeProvider';
import { memo } from 'react';
import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

export enum IconTheme {
  CLASSIC = 'icon',
  INVERTED = 'iconInverted',
}

interface ThemeSwitcherProps {
  className?: string;
  iconTheme?: IconTheme
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const {
    className,
    iconTheme = IconTheme.CLASSIC,
  } = props;

  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon className={cls[iconTheme]} />
    </Button>
  );
});
