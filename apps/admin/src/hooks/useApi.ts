import {
  useQuery,
  useMutation,
  type UseQueryOptions,
  type UseMutationOptions,
} from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
console.log("VITE_API_URL:", API_URL);

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// intercept if 401 return to /login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
  }
);
export function useApiQuery<T>(
  queryKey: string | string[],
  url: string,
  options?: UseQueryOptions<T>
) {
  return useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async () => {
      const { data } = await api.get<T>(url);
      return data;
    },
    ...options,
  });
}

export function useApiMutation<TResponse, TVariables>(
  url: string,
  method: "post" | "put" | "patch" | "delete" = "post",
  options?: UseMutationOptions<TResponse, unknown, TVariables>
) {
  return useMutation({
    mutationFn: async (variables: TVariables) => {
      let finalUrl = url;
      let payload: TVariables | undefined = variables;

      // Handle URL placeholders (e.g., /users/:id)
      if (url.includes(":")) {
        const urlParts = url.split("/");
        const variableParts = Object.entries(
          variables as Record<string, unknown>
        );

        finalUrl = urlParts
          .map((part) => {
            if (part.startsWith(":")) {
              const key = part.slice(1);
              const found = variableParts.find(([k]) => k === key);
              if (found) {
                delete (payload as Record<string, unknown>)[found[0]];
                return found[1];
              }
            }
            return part;
          })
          .join("/");
      } else if (
        method === "delete" ||
        (variables !== null &&
          typeof variables === "object" &&
          "sid" in (variables as object))
      ) {
        finalUrl = `${url}/${(variables as any).sid}`;
        payload = undefined;
      }

      const { data } = await api.request<TResponse>({
        url: finalUrl,
        method,
        data: payload,
      });
      return data;
    },
    ...options,
  });
}
