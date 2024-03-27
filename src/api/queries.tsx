import { useQuery } from '@tanstack/react-query';

import { fetchTags, Tag } from './api';

export const QUERY_KEYS = {
  tag: 'tags',
};
export const useGetTags = () => {
  return useQuery<Tag[]>({
    queryFn: fetchTags,
    queryKey: [QUERY_KEYS.tag],
  });
};
