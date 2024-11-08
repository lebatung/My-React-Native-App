import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';

console.log('Check API_URL:', API_URL);

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
interface ApiErrorData {
  message?: string;
}
interface ErrorResponse {
  message: string;
  status: number;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL || 'https://215c-112-197-236-168.ngrok-free.app/api',
  timeout: 10000,
  headers: {
    'Accept': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.method !== 'get') {
      config.headers['Content-Type'] = 'application/json';
    }
    
    try {
      const token = await AsyncStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Lỗi khi lấy token:', error);
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response) {
      switch (error.response.status) {
        case 401: {

          if (originalRequest && !originalRequest.url?.includes('refresh-token')) {
            try {

              const refreshToken = await AsyncStorage.getItem('refreshToken');
              const response = await axiosInstance.post('/auth/refresh-token', {
                refreshToken,
              });

              if (response.data.token) {
                await AsyncStorage.setItem('token', response.data.token);

                originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
                return axiosInstance(originalRequest);
              }
            } catch (refreshError) {

              await AsyncStorage.multiRemove(['token', 'refreshToken']);

              return Promise.reject(refreshError);
            }
          }
          break;
        }
        case 403:
 
          break;
        case 404:

          break;
        case 500:

          break;
      }
    }

    const errorResponse: ErrorResponse = {
      message: (error.response?.data as ApiErrorData)?.message || 'Đã có lỗi xảy ra',
      status: error.response?.status || 500,
    };

    return Promise.reject(errorResponse);
  }
);

export const ApiHelper = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      return await axiosInstance.get(url, config);
    } catch (error) {
      throw error;
    }
  },

  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      return await axiosInstance.post(url, data, config);
    } catch (error) {
      throw error;
    }
  },

  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      return await axiosInstance.put(url, data, config);
    } catch (error) {
      throw error;
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    try {
      return await axiosInstance.delete(url, config);
    } catch (error) {
      throw error;
    }
  },
};

export default ApiHelper;