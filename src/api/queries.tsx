import { useQuery } from '@tanstack/react-query';

import { fetchTags } from './api';

export const QUERY_KEYS = {
  tag: 'tags',
};
export const useGetTags = () => {
  return useQuery({
    queryFn: fetchTags,
    queryKey: [QUERY_KEYS.tag],
  });
};
