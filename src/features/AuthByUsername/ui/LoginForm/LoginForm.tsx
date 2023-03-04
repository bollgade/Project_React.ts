import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { FieldName, loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    username,
    password,
    isLoading,
    error,
  } = useSelector(getLoginState);

  type event = React.ChangeEvent<HTMLInputElement>;
  const onInputChange = useCallback((value: string, e: event) => {
    dispatch(loginActions.setUserData({
      value,
      name: e.target.name as FieldName, // TODO: find another solution without 'as'
    }));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Auth Form')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        placeholder={t('Username')}
        onChange={onInputChange}
        value={username}
        name={FieldName.USERNAME}
      />
      <Input
        placeholder={t('Password')}
        onChange={onInputChange}
        value={password}
        name={FieldName.PASSWORD}
        type="password"
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Log in')}
      </Button>
    </div>
  );
});
