import { apiCall, type APIRequestInterface } from "@/helpers/api";
import { type UseMutationOptions, useMutation } from "@tanstack/react-query";
import {
  ErrorNotistackToast,
  SuccessNotistackToast,
} from "../ui/global/toasts/notistack";

export const usePostMutationQuery = <T, U>({
  url,
  type = "POST",
  toast = true,
  ...mutationOptions
}: {
  url: string;
  type?: "POST" | "PUT" | "PATCH" | "DELETE";
  toast?: boolean;
  mutationOptions?: UseMutationOptions<T>;
}) => {
  const defaultPostQueryFn = async (body: U): Promise<T> => {
    const response: APIRequestInterface<T> = await apiCall(url, type, body);

    if (toast) {
      if (response.success) {
        SuccessNotistackToast(response?.message ?? "Success");
      } else {
        ErrorNotistackToast(response.message ?? "Sorry, Something went wrong");
      }
    }

    return response.data;
  };

  return useMutation<T, Error, U>({
    ...mutationOptions,
    mutationFn: defaultPostQueryFn,
  });
};

export const useGetMutationQuery = <T,>({
  url,
  toast = true,
  ...mutationOptions
}: {
  url: string;
  toast?: boolean;
  mutationOptions?: UseMutationOptions<T>;
}) => {
  const defaultGetQueryFn = async (): Promise<T> => {
    const response: APIRequestInterface<T> = await apiCall(url, "GET");

    if (response.success && toast) {
      SuccessNotistackToast(response?.message ?? "Success");
    } else if (toast) {
      ErrorNotistackToast(response.message ?? "Sorry, Something went wrong");
    }

    return response.data;
  };

  return useMutation<T, Error>({
    ...mutationOptions,
    mutationFn: defaultGetQueryFn,
  });
};
