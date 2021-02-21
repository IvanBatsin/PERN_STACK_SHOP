import { axios } from '../core/axios';
import { ServerResponse } from '../interfaces/serverResponse';
import { IBrandCategory } from '../interfaces/shop_items';

export const createCategory = async (payload: Partial<IBrandCategory>): Promise<ServerResponse<IBrandCategory>> => {
  const { data } = await axios.post<ServerResponse<IBrandCategory>>('/api/category', payload);
  return data;
}

export const getCategories = async (): Promise<ServerResponse<IBrandCategory[]>> => {
  const { data } = await axios.get<ServerResponse<IBrandCategory[]>>('/api/category');
  return data;
}