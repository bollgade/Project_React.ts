import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(
    () => setIsAuthModal((prev) => !prev),
    [],
  );

  const plugChildren = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus repudiandae magnam, quas quod quia commodi rerum quis aperiam ab eaque,
        ex fugit architecto nobis, voluptate facilis neque. Ad, a maxime!`;

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Log in')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {plugChildren}
      </Modal>

    </div>
  );
};
