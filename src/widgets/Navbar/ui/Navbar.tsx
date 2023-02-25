import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [className])}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={classNames(cls.mainLink)}
        >
          {t('Main')}
        </AppLink>
        <AppLink to="/about">{t('About')}</AppLink>
      </div>
    </div>
  );
};
