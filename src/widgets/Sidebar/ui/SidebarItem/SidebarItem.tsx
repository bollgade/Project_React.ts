import { useTranslation } from 'react-i18next';
import { RouteItem } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface expectedCls {
  item: string,
  icon: string,
  itemText: string,
}

interface SidebarItemProps<clsType> {
  cls?: clsType;
  item?: RouteItem,
}

export function SidebarItem<clsType extends expectedCls>(props: SidebarItemProps<clsType>) {
  const {
    cls,
    item,
  } = props;
  const { t } = useTranslation();

  const {
    path,
    link: { Icon, text },
  } = item;

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={path}
      className={cls.item}
    >
      <Icon className={cls.icon} />
      <span className={cls.itemText}>{t(text)}</span>
    </AppLink>
  );
}
