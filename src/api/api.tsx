import axios from 'axios';

export type Tag = {
  count: number;
  name: string;
};

export const httpClient = axios.create({
  baseURL: 'https://api.stackexchange.com/',
});

export const fetchTags = async (): Promise<Tag[]> => {
  const { data } = await httpClient.get(
    '2.3/tags?pagesize=100&order=desc&sort=popular&site=stackoverflow',
  );
  return data.items;
};
