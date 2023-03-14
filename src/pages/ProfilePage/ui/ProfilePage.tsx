import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useLazyReducers } from 'shared/lib/hooks/useLazyReducer/useLazyReducers';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
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
      <ProfileCard />
    </div>
  );
});

export default ProfilePage;
