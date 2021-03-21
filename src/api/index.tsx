import { useDefinitionsQuery } from './useDefinitionsQuery';

const definitionsKey = 'definitions';

export const queryKeys = {
  getDefinitions: (word: string) => [definitionsKey, word],
};

export const defaultQueryOptions = {
  enabled: false,
  retry: false,
};

export { useDefinitionsQuery };
