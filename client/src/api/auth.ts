import { axios } from '../core/axios';
import { ServerResponse } from '../interfaces/serverResponse';
import { User } from '../interfaces/user';

export const singIn = async (payload: Partial<User>): Promise<ServerResponse<string>> => {
  const { data } = await axios.post<ServerResponse<string>>('/api/user/signin', payload);
  return data;
}
export const signUp = async (payload: Partial<User>): Promise<ServerResponse<string>> => {
  const { data } = await axios.post<ServerResponse<string>>('/api/user/signup', payload);
  return data;
}
export const auth = async (): Promise<ServerResponse<string>> => {
  const { data } = await axios.get<ServerResponse<string>>('/api/user/auth');
  window.localStorage.setItem('token', JSON.stringify(data.data));
  return data;
}