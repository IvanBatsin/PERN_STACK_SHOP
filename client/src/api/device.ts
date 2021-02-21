import { axios } from '../core/axios';
import { ServerResponse } from '../interfaces/serverResponse';
import { IDevice } from '../interfaces/shop_items';

interface ServerDevicesResponseData {
  count: number,
  rows: IDevice[]
}

export const createDevice = async (payload: FormData): Promise<ServerResponse<IDevice>> => {
  const { data } = await axios.post<ServerResponse<IDevice>>('/api/device', payload);
  return data;
}


export const getDevices = async (brandId?: number, categoryId?: number, limit = 5, page = 1): Promise<ServerResponse<ServerDevicesResponseData>> => {
  const { data } = await axios.get<ServerResponse<ServerDevicesResponseData>>('/api/device', {params: {
    brandId, categoryId, limit, page
  }});
  return data;
}

export const getOneDevice = async (id: number): Promise<ServerResponse<IDevice>> => {
  const { data } = await axios.get<ServerResponse<IDevice>>(`/api/device/${id}`);
  return data;
}