import apiInstance from '@/apiInstance';

export const createTask = (body: any) =>
  apiInstance.post('http://localhost:8081/task/createTask', body).then(res => res.data);
