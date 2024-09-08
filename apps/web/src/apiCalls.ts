import apiInstance from '@/apiInstance';

export const createTask = (body: any) =>
  apiInstance.post('/task/createTask', body).then(res => res.data);
