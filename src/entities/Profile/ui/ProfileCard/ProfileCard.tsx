import { FC } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const _isLoading = useSelector(getProfileIsLoading);
  const _error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editBtn}
        >
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.firstName}
          placeholder={t('Your first name')}
          className={cls.input}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Your last name')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
