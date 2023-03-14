import { fetchProfileData, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useLazyReducers } from 'shared/lib/hooks/useLazyReducer/useLazyReducers';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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
