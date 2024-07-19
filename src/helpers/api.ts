import config from "@/config";
import { TOKEN } from "@/shared/enums/global";
import axios, { AxiosError, type AxiosRequestConfig } from "axios";

export enum HeaderType {
  ADMIN = "admin",
}

export const baseURL = config.BASE_URL;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    TOKEN.ACCESS_TOKEN
  )}`;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error instanceof AxiosError) {
      const originalRequest = error.config;

      if (!originalRequest) {
        return;
      }
      // status code 401 is unauthorized
      if (error.response?.status === 401) {
        try {
          const response = await axios.get(
            `${config.BASE_URL}/auth/refresh-token`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem(
                  TOKEN.REFRESH_TOKEN
                )}`,
              },
            }
          );

          if (!response.data.success) {
            throw new Error("Request Failed!");
          }

          const data = response.data.data;

          localStorage.setItem(TOKEN.ACCESS_TOKEN, data.access_token);
          localStorage.setItem(TOKEN.REFRESH_TOKEN, data.refresh_token);

          originalRequest.headers.Authorization = data.access_token;

          return instance(originalRequest);
        } catch (error) {
          localStorage.clear();
          window.location.replace("/");
          return;
        }
      }
    }

    return Promise.reject(error as Error);
  }
);

export interface APIRequestInterface<T> {
  data: T;
  message: string;
  success: boolean;
  error: { message: string };
}

export const apiCall = async <T, U>(
  url: string,
  method: string,
  body?: U
): Promise<APIRequestInterface<T>> => {
  const config: AxiosRequestConfig<U> = {
    method,
    url,
    data: body,
  };
  const response = await instance(config);
  return response.data;
};

import {
  MutationCache,
  QueryCache,
  QueryClient,
  type QueryKey,
} from "@tanstack/react-query";

export const defaultGetQueryFn = async ({
  queryKey,
}: {
  queryKey: QueryKey;
}) => {
  if (!queryKey) return;
  const url = queryKey[0] as string;
  const response = await apiCall(url, "GET");

  return response.data;
};

const queryCache = new QueryCache({
  onError: (error) => {
    if (error instanceof AxiosError) {
      console.error(error.response?.data.message);
    }
  },
});

const mutationCache = new MutationCache({
  onError: (error) => {
    if (error instanceof AxiosError) {
      // ErrorMessageToast(error.response?.data.message);
      console.log(error);
    }
  },
});

export const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      queryFn: defaultGetQueryFn,
    },
  },
});
