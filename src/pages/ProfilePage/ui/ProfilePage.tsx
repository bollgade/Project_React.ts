import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  return (
    <div>
      <h1>{t('Profile page')}</h1>
    </div>
  );
};

export default ProfilePage;
