import {
    useQuery,
    useMutation,
    type UseQueryOptions,
    type UseMutationOptions,
  } from '@tanstack/react-query';
  import axios from 'axios';
  
  const API_URL = import.meta.env.VITE_API_URL;
  
  const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
  });
  
  export function useApiQuery<T>(
    key: string | string[],
    url: string,
    options?: UseQueryOptions<T>,
  ) {
    return useQuery<T>(
      key,
      async () => {
        const { data } = await api.get<T>(url);
        return data;
      },
      options,
    );
  }
  
  export function useApiMutation<T, S>(
    url: string,
    method: 'post' | 'put' | 'patch' | 'delete' = 'post',
    options?: UseMutationOptions<T, unknown, S>,
  ) {
    return useMutation<T, unknown, S>(async (variables) => {
      let finalUrl = url;
      let payload: any = variables;
  
      // Check if the URL contains a placeholder (e.g., :sid)
      if (url.includes(':')) {
        const urlParts = url.split('/');
        const variableParts = Object.entries(variables as Record<string, any>);
  
        finalUrl = urlParts
          .map((part) => {
            if (part.startsWith(':')) {
              const key = part.slice(1);
              const [foundKey, value] =
                variableParts.find(([k]) => k === key) || [];
              if (foundKey) {
                delete payload[foundKey];
                return value;
              }
            }
            return part;
          })
          .join('/');
      } else if (
        method === 'delete' ||
        (variables !== null &&
          typeof variables === 'object' &&
          'sid' in variables)
      ) {
        finalUrl = `${url}/${(variables as any).sid}`;
        payload = undefined as unknown as S; // DELETE requests typically don't have a body
      }
  
      const { data } = await api[method]<T>(finalUrl, payload);
      return data;
    }, options);
  }
  