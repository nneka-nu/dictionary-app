import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';

const BASE_URL = process.env.REACT_APP_WORDNIK_API_BASE_URL;
const API_KEY = process.env.REACT_APP_WORDNIK_API_KEY;

const definitionsKey = 'definitions';

export const queryKeys = {
  getDefinitions: (word: string) => [definitionsKey, word],
};

type Definition = {
  attributionText: string;
  partOfSpeech: string;
  sourceDictionary: string;
  text?: string;
};

export const useDefinitionsQuery = (word: string) => {
  return useQuery<Definition[], AxiosError>(
    queryKeys.getDefinitions(word),
    async () => {
      const { data } = await axios.get(
        `${BASE_URL}${word.toLowerCase()}/definitions?api_key=${API_KEY}`
      );
      return data;
    },
    {
      enabled: false,
      retry: false,
    }
  );
};
