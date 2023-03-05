import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface useLazyReducersProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export function useLazyReducers({
  reducers,
  removeAfterUnmount = false,
}: useLazyReducersProps) {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      // TODO: FIX Adding reducer when it's already in store
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
