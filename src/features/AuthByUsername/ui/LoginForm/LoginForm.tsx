import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
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

  type event = React.ChangeEvent<HTMLInputElement>;

  const onInputChange = (value: string, e: event) => {
    setInputValue({ ...inputValue, [e.target.name]: value });
  };

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        autoFocus
        placeholder={t('Username')}
        onChange={onInputChange}
        name="username"
      />
      <Input
        placeholder={t('Password')}
        onChange={onInputChange}
        name="password"
        type="password"
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {t('Log in')}
      </Button>
    </div>
  );
};
