import { axios } from '../core/axios';
import { User } from '../interfaces/user';

export interface ServerResponse<T> {
  status: 'error' | 'success',
  data: T
}
export const singIn = async (payload: Partial<User>): Promise<ServerResponse<string>> => {
  const { data } = await axios.post<ServerResponse<string>>('/api/user/signin', payload);
  return data;
}
export const signUp = async (payload: Partial<User>): Promise<ServerResponse<string>> => {
  const { data } = await axios.post<ServerResponse<string>>('/api/user/signup', payload);
  return data;
}
export const auth = async (): Promise<ServerResponse<string>> => {
  const { data } = await axios.post<ServerResponse<string>>('/api/user/auth');
  return data;
}