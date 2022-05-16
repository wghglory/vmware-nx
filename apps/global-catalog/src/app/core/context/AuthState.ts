import { ACCESS_TOKEN } from '@vmware/constants';
import { User } from '@vmware/api-interfaces';

export interface AuthState {
  status: 'default' | 'loading' | 'success' | 'error';
  user: User | null;
  error: Error | null;
  token: string;
}

export const initialState: AuthState = {
  status: 'default',
  user: null,
  error: null,
  token: localStorage.getItem(ACCESS_TOKEN) || '',
};
