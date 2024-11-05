import axios, { AxiosInstance, AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://8989-2405-4803-d93b-a120-90ab-458d-d276-c8b2.ngrok-free.app/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          AsyncStorage.removeItem('token');
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export const ApiHelper = {
  get: async <T>(url: string, params?: any) => axiosInstance.get<T>(url, { params }),
  post: async <T>(url: string, data?: any) => axiosInstance.post<T>(url, data),
  put: async <T>(url: string, data?: any) => axiosInstance.put<T>(url, data),
  delete: async <T>(url: string) => axiosInstance.delete<T>(url),
};

export default ApiHelper;
