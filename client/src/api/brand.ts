import { axios } from '../core/axios';
import { ServerResponse } from '../interfaces/serverResponse';
import { IBrandCategory } from '../interfaces/shop_items';

export const createBrand = async (payload: Partial<IBrandCategory>): Promise<ServerResponse<IBrandCategory>> => {
  const { data } = await axios.post<ServerResponse<IBrandCategory>>('/api/brand', payload);
  return data;
}

export const getBrands = async (): Promise<ServerResponse<IBrandCategory[]>> => {
  const { data } = await axios.get<ServerResponse<IBrandCategory[]>>('/api/brand');
  return data;
}