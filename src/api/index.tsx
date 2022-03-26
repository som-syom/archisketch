import axios, { AxiosInstance } from 'axios';
const BASE_URL = 'http://localhost:4000/db';

export const callAPI: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
});
