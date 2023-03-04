import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string,
  password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }

      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })); // TODO: edit modal to start closing from parent
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data)); // imitation of saving token
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
      return thunkAPI.rejectWithValue('error');
    }
  },
);
