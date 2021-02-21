export interface ServerResponse<T> {
  status: 'error' | 'success',
  data: T
}