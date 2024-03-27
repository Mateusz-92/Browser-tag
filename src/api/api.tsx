import axios, { AxiosResponse } from 'axios';

export type Tag = {
  count: number;
  name: string;
};

export const api = {
  baseURL: 'https://api.stackexchange.com/',
  get: async (path: string, params: object = {}) => {
    const response: AxiosResponse = await axios({
      method: 'GET',
      url: `${api.baseURL}${path}`,
      params,
    });
    return response?.data;
  },
};

export const fetchTags = async (): Promise<Tag[]> => {
  try {
    const tags = await api.get('2.3/tags?pagesize=100&order=desc&sort=popular&site=stackoverflow');
    return tags.items;
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};
