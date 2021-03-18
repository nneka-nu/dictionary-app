import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { addWordToHistory } from '../../store/history';
import { removeWordFromVocab } from '../../store/vocab';
import { updateSearchTerm } from '../../store/searchTerm';
import Tabs from '../Tabs';
import { listStyle } from './style';

export default function WordsList() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.history);
  const vocab = useAppSelector((state) => state.vocab);
  const tabData = useMemo(() => {
    return [
      { label: 'history', count: history.length },
      { label: 'vocab', count: vocab.length },
    ];
  }, [history.length, vocab.length]);

  const handleTabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  const handleWordClick = (word: string) => {
    dispatch(updateSearchTerm(word));
    if (activeTabIndex === 0) {
      // Move word to the top of the History list
      dispatch(addWordToHistory(word));
    }
  };

  useEffect(() => {
    if (vocab.length > 0) setActiveTabIndex(1);
  }, [vocab]);

  const ListItem = () => {
    const words = activeTabIndex === 0 ? history : vocab;

    return (
      <>
        {words.map((word, index) => (
          <li key={index}>
            <button
              type="button"
              title="Search"
              onClick={() => handleWordClick(word)}
            >
              {word}
            </button>
            {activeTabIndex === 1 && (
              <button
                type="button"
                className="delete"
                title="Delete"
                onClick={() => dispatch(removeWordFromVocab(word))}
              >
                X
              </button>
            )}
          </li>
        ))}
      </>
    );
  };

  return (
    <div>
      <Tabs
        activeTabIndex={activeTabIndex}
        data={tabData}
        onTabClick={handleTabClick}
      />
      <ul className={listStyle}>
        <ListItem />
      </ul>
    </div>
  );
}
