import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
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
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const classMods: Record<string, boolean> = {
    [cls.square]: square,
  };

  const additionalClasses = [
    className,
    cls[theme],
    cls[size],
  ];

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(cls.button, classMods, additionalClasses)}
    >
      {children}
    </button>
  );
};
