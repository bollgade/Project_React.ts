import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersList, useLazyReducers } from 'shared/lib/hooks/useLazyReducer/useLazyReducers';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');
  useLazyReducers({
    reducers,
    removeAfterUnmount: true,
  });
  return (
    <div>
      <h1>{t('Profile page')}</h1>
    </div>
  );
});

export default ProfilePage;
