import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { queryKeys, defaultQueryOptions } from './index';
import { BASE_URL, API_KEY } from '../constants/api';

type Definition = {
  attributionText: string;
  partOfSpeech: string;
  sourceDictionary: string;
  text?: string;
};

export const useDefinitionsQuery = (
  word: string,
  apiKey = API_KEY,
  queryOptions = defaultQueryOptions
) => {
  return useQuery<Definition[], AxiosError>(
    queryKeys.getDefinitions(word),
    async () => {
      const { data } = await axios.get(
        `${BASE_URL}/${word.toLowerCase()}/definitions?api_key=${apiKey}`
      );
      return data;
    },
    queryOptions
  );
};
