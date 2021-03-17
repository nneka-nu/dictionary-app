import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { addWordToVocab } from '../../store/vocab';
import { useDefinitionsQuery } from '../../api';
import { capitalCaseText } from '../../helpers';
import { definitionsStyle, definitionsListStyle } from './style';

export default function WordDefinitions() {
  const searchTerm = useAppSelector((state) => state.searchTerm);
  const dispatch = useAppDispatch();
  const { status, data, error, refetch } = useDefinitionsQuery(searchTerm);

  useEffect(() => {
    if (searchTerm) refetch();
  }, [searchTerm, refetch]);

  if (status === 'idle') {
    return null;
  }

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    const status = error?.response?.status;
    if (status === 404) {
      return (
        <p>
          We could not find that word in our dictionary. Please try another.
        </p>
      );
    }
    if (status === 429) {
      return <p>Too many requests. Please try again later.</p>;
    }
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div className={definitionsStyle}>
      <header>
        <h1>{searchTerm && capitalCaseText(searchTerm)}</h1>
        <button
          type="button"
          onClick={() => dispatch(addWordToVocab(searchTerm))}
        >
          Save Word
        </button>
      </header>
      <ul className={definitionsListStyle}>
        {data &&
          data
            .filter((item) => item.text && item.sourceDictionary !== 'century')
            .map((item, index) => {
              return (
                <li key={index} className="row">
                  <p>
                    {item.partOfSpeech && (
                      <span className="part-of-speech">
                        {item.partOfSpeech}.&nbsp;
                      </span>
                    )}
                    {item.text!.replace(/<[^>]*>/g, '')}
                  </p>
                  <span className="attribution">{item.attributionText}</span>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
