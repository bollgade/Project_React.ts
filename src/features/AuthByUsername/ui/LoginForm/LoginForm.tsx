import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <input onChange={onInputChange} name="username" className={cls.input} />
      <input onChange={onInputChange} name="password" type="password" className={cls.input} />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {t('Log in')}
      </Button>
    </div>
  );
};
