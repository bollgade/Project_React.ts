import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  },
});
