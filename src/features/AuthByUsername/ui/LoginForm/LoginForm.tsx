import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReducersList, useLazyReducers } from 'shared/lib/useLazyReducer/useLazyReducers';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { FieldName, loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  useLazyReducers({
    reducers: initialReducers,
    removeAfterUnmount: true,
  });

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
      {error && <Text text={t('Invalid username or password')} theme={TextTheme.ERROR} />}
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

export default LoginForm;
