import { getUserAuthData, userActions } from 'entities/User';
import { loginActions, LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(
    () => setIsAuthModal(false),
    [],
  );

  const onShowModal = useCallback(
    () => setIsAuthModal(true),
    [],
  );

  const onLogout = useCallback(() => {
    onCloseModal();
    dispatch(loginActions.clearUserData());
    dispatch(userActions.logout());
  }, [dispatch, onCloseModal]);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={authData ? onLogout : onShowModal}
      >
        {t(authData ? 'Log out' : 'Log in')}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  );
};
