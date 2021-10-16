import { headers } from "../utils/api";

interface Options {
  method?: string;
  headers?: { [key: string]: string };
  body?: string;
}

export const fetchData = (url: string, options?: Options) =>
  fetch(url, {
    ...options,
    method: options?.method || "GET",
    headers: { ...options?.headers, ...headers },
  }).then((response) => response.json());
