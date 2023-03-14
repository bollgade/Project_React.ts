import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    square,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props;

  const classMods: Mods = {
    [cls.square]: square,
  };

  const additionalClasses = [
    className,
    cls[theme],
    cls[size],
  ];

  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames(cls.button, classMods, additionalClasses)}
      {...otherProps}
    >
      {children}
    </button>
  );
});
