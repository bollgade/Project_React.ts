import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void ;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e);
  };

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      <label className={cls.input}>
        <input
          {...otherProps}
          value={value}
          onChange={onChangeHandler}
          type={type}
          className={cls.field}
          placeholder=" "
        />
        <span className={cls.label}>{placeholder}</span>
      </label>
    </div>
  );
});
