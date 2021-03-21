import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { addWordToVocab } from '../../store/vocab';
import { useDefinitionsQuery } from '../../api';
import { capitalCaseText } from '../../helpers/common';
import {
  definitionsStyle,
  definitionsListStyle,
  wordnikAttrStyle,
} from './style';
import { setActiveTab, WordsListTab } from '../../store/activeTab';

export default function WordDefinitions() {
  const searchTerm = useAppSelector((state) => state.searchTerm);
  const dispatch = useAppDispatch();
  const { status, data, error, refetch } = useDefinitionsQuery(searchTerm);

  const handleWordSave = () => {
    dispatch(addWordToVocab(searchTerm));
    dispatch(setActiveTab(WordsListTab.vocab));
  };

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
        <button type="button" onClick={handleWordSave}>
          Save Word
        </button>
      </header>
      {data && data.length > 0 && (
        <>
          <ul className={definitionsListStyle}>
            {data
              .filter(
                (item) => item.text && item.sourceDictionary !== 'century'
              )
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
          <a className={wordnikAttrStyle} href={`${data[0].wordnikUrl}`}>
            {`${data[0].wordnikUrl}`}
          </a>
        </>
      )}
    </div>
  );
}
