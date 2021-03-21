import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';
import axios from 'axios';
import { defaultQueryOptions, useDefinitionsQuery } from '.';
import { AllProviders } from '../helpers/tests';
import { BASE_URL } from '../constants/api';

// Fix cross origin request error
axios.defaults.adapter = require('axios/lib/adapters/http');

const API_KEY = 'API_KEY';

it('should return definitions for a word', async () => {
  const word = 'location';
  const expectedData = [
    {
      partOfSpeech: 'noun',
      attributionText:
        'from WordNet 3.0 Copyright 2006 by Princeton University. All rights reserved.',
      sourceDictionary: 'wordnet',
      text: 'a determination of the place where something is',
      wordnikUrl: 'https://www.wordnik.com/words/location',
    },
  ];

  const expectation = nock(BASE_URL)
    .persist()
    .get(`/${word}/definitions`)
    .query({
      api_key: API_KEY,
    })
    .reply(200, expectedData);

  const { result, waitFor } = renderHook(
    () =>
      useDefinitionsQuery(word, API_KEY, {
        ...defaultQueryOptions,
        enabled: true,
      }),
    { wrapper: AllProviders }
  );

  await waitFor(() => result.current.isSuccess);

  expect(result.current.data).toEqual(expectedData);

  expectation.done();
});
