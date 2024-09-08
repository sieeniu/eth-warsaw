import axios from 'axios';

const apiInstance = axios.create({
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,
});

export default apiInstance;
