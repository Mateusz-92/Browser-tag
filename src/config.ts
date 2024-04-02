import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 60_000,
      },
    },
    queryCache: new QueryCache(),
  });