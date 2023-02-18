import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={classNames(cls.links, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classNames(cls.mainLink)}>Главная</AppLink>
      <AppLink to="/about">О проекте</AppLink>
    </div>
  </div>
);
